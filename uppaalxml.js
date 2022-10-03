import * as xml2js from 'xml2js';
/**
 * UppaalXML parser with few QOL properties (to simplify working with XML-style structure):
 * 1) get/set the template by its name
 * 2) get/set transition labels, get transition src/trg
 * 3) get/set global declarations using "global" alias 
 * 4) get/set <TemplateName>'s local declarations using "local" alias 
 * 
 * Note: 
 * - it is assumed that the input model is syntacticly correct 
 *   (e.g., template names are unique, their location names are internally unique, etc.)
 */
export default class UppaalXML {
    constructor(str) {
        const xmlParser = new xml2js.Parser();
        xmlParser.parseString(str, function (err, res) {
            Object.assign(this, res);

            // shorthand for global delarations
            Object.defineProperties(this, {
                "global": {
                    enumerable: false,
                    configurable: true,
                    get: function () {
                        return this.nta.declaration[0]
                    },
                    set: function (_val) {
                        this.nta.declaration[0] = _val;
                    }
                },
            })

            // shorthand for templates local delarations
            this.nta.template.forEach(t=>{
                Object.defineProperties(t, {
                    "local": {
                        enumerable: false,
                        configurable: true,
                        get: function () {
                            return t.declaration[0]
                        },
                        set: function (_val) {
                            t.declaration[0] = _val;
                        }
                    },
                })
            })

            // shorthand for accessing templates by their name
            this.nta.template.forEach(t=>{
                Object.defineProperties(this, {
                    [t.name[0]?._ || t.name[0]]:{
                        get: function(){
                            return t;
                        },
                        set: function(_val){
                            t = _val;
                        },
                        enumerable: true,
                        configurable: true
                    }
                });
            })

            // override for getter/setter for "transition" property
            this.nta.template.map(el => {
                (function (el) {
                    var oldValue = el.transition;
                    var currentValue = oldValue;
                    var getter = function () {
                        return currentValue;
                    };
                    var setter = function (newValue) {
                        currentValue = newValue;
                    };
                    Object.defineProperty(el, 'transition', {
                        get: getter,
                        set: setter,
                        enumerable: true,
                        configurable: true
                    });
                })(el);
            });

            // shorthand for edge details (labels, src, trg) of a given type
            for(let i =0; i<this.nta.template.length;i++){
                this.nta.template[i].transition.forEach(t => {
                    Object.defineProperties(t, {
                        "guard": {
                            enumerable: false,
                            configurable: true,
                            get: function () {
                                return t.label?.filter(l => l.$.kind == "guard")[0]?._;
                            },
                            set: function (_val) {
                                t.label.filter(l => l.$.kind == "guard")[0]._ = _val
                            }
                        },
                        "assignment":{
                            enumerable: false,
                            configurable: true,
                            get: function () {
                                return t.label?.filter(l => l.$.kind == "assignment")[0]?._
                            },
                            set: function (_val) {
                                let assignmentLabels = t.label.filter(l => l.$.kind == "assignment");
                                if(assignmentLabels.length!=0){
                                    assignmentLabels[0]._ = _val;
                                }else{
                                    let newLabel = {$: {kind: "assignment"}, _: _val};
                                    t.label = [...t.label, newLabel];
                                }
                            }
                        },
                        "select":{
                            enumerable: false,
                            configurable: true,
                            get: function () {
                                return t.label?.filter(l => l.$.kind == "select")[0]?._
                            },
                            set: function (_val) {
                                let selectLabels = t.label.filter(l => l.$.kind == "select");
                                if(selectLabels.length!=0){
                                    selectLabels[0]._ = _val;
                                }else{
                                    let newLabel = {$: {kind: "select"}, _: _val};
                                    t.label = [newLabel,...t.label]; // NOTE: select labels must appear before the the guard/update
                                }
                            }
                        },
                        "synchronisation":{
                            enumerable: false,
                            configurable: true,
                            get: function () {
                                return t.label?.filter(l => l.$.kind == "synchronisation")[0]?._
                            },
                            set: function (_val) {
                                t.label.filter(l => l.$.kind == "synchronisation")[0]._ = _val
                            }
                        },
                        "src":{
                            enumerable: false,
                            configurable: true,
                            get: function () {
                                return t.source[0]?.$.ref
                            }
                        },
                        "trg":{
                            enumerable: false,
                            configurable: true,
                            get: function () {
                                return t.target[0]?.$.ref
                            }
                        }
                    })
                })
            }
            
            
        }.bind(this))
    }

    // returns XML string (in an UPPAAL's format)
    toString() {
        // fixed doctype tag for the Uppaal
        const xmlPrefixFix = `<?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE nta PUBLIC '-//Uppaal Team//DTD Flat System 1.1//EN' 'http://www.it.uu.se/research/group/darts/uppaal/flat-1_2.dtd'>`;

        // strip all non-enumerable custom attributes and methods
        let obj = JSON.parse(JSON.stringify(this.nta)); 

        // xmlPrefixFix will be prepended instead of a header, nta tag encloses the body
        const xmlBuilder = new xml2js.Builder({ 
            headless: true,
            rootName: 'nta'
        });

        // concat + remove EOL chars
        // return (xmlPrefixFix + xmlBuilder.buildObject(obj)).replace("&#xD",'').replace("&#xA;",'');
        return xmlPrefixFix + xmlBuilder.buildObject(obj);
    }


    // returns an index of a (first) template of a given name
    indexOfTemplate(_tname) {
        for (let i = 0; i < this.nta.template.length; i++) {
            if ((this.nta.template[i].name[0]._ || this.nta.template[i].name[0]) == _tname) {
                return i;
            }
        }
        return -1;
    }

    // returns an array of template names
    getTemplateNames(){
        let tnames = [];
        for (let i = 0; i < this.nta.template.length; i++) {
            tnames.push(this.nta.template[i].name[0]._ || this.nta.template[i].name[0])
        }
        return tnames;
    }

    /**
     * for a given template returns a list of all its location ids
     * @param {*} _tname 
     */
    getLocationsOf(_tname){
        return this[_tname].location.map(l=>l.$.id)
        // let locs = [];
        // this[_tname].location.forEach(l=>{
        //     locs.push(l.$.id)
        // })
        // return locs;
    }

    // returns a list of all location ids of its templates
    getAllLocations(){
        return this.getTemplateNames().reduce((acc,tname)=>acc.concat(this.getLocationsOf(tname)),[]);
    }

    
    // for all locations: if name label is missing then set it to its id
    fillMissingLocationNames(_tname, xshift=0, yshift=16){
        if(Array.isArray(_tname)){
            _tname.forEach( t=>this.fillMissingLocationNames(t));
        }else if(typeof _tname === 'undefined'){
            this.fillMissingLocationNames(this.getTemplateNames());
        }else{
            this[_tname].location.forEach(l=>{
                if(typeof l?.name === "undefined"){
                    l.name = []
                }
                if(typeof l.name?.[0]?._ === "undefined"){
                    l.name = [{
                        _: l.$.id,
                        $: {
                            x:Number(l.$.x)+xshift,
                            y:Number(l.$.y)+yshift,
                        }
                    }]
                }
            })
        }
    }



    /**
     * @typedef {Object} myVar
     * @property {string} name
     * @property {string} type 
     */

    /**
     * Parses comma separated list of <id>:<range> into an array with elements with <name=id> and <type=range>
     * @param {string} _label - raw/unformatted content of a select label tag
     * @returns {Array.<myVar>} 
     */
    getSelectLabelVars(_label){
        let str = _label.replace(/\s/g, "");                        // remove whitespces
        // const reg = /(?:[^,:]+):([^\[\]:]*(?:\[[^\[\]:]*\])*)/gm;
        const reg = /([^,:]+):([^\[\]:,]*(?:\[[^\[\]:]*\])*)/gm;   // match <ID>:<TYPE> pairs (joined by ',')
        const matches = str.matchAll(reg);
        let res = [];
        for (const m of matches) {
            res.push({
              "name": m[1],
              "type": m[2]  
            })
        }
        return res;
    }

    // within a given template, translates locationName to an id (it is assumed that location names are unique within its template)
    getLocationNameToIdMap(_tname){
        return this[_tname].location.reduce((acc,y)=>{
            if(typeof y.name?.[0]?._ !== "undefined")
                acc[y.name[0]._]=y.$.id;
            return acc;
        },{});
    }

    // withing a given template, translates locationId to its name label (if any) or an empty string otherwise
    getLocationIdToNameMap(_tname){
        return this[_tname].location.reduce((acc,y)=>(acc[y.$.id]=y.name?.[0]?._||"",acc),{});
    }
}
