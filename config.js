import * as path from 'path';



const CONFIG = {
    INPUT: {
        DIR: "./sample_input",
        MODEL: "model.xml",
        SAMPLE: "extended_mas_graph_sample.xml",
        MAPPING: "mapping.txt" // list of pairs (mapping_function, scope)
    },
    OUTPUT:{
        DIR:"./output_files",
        MODEL:"./abstract_model.xml",
    },
    get pathToInputModel(){
        return path.join(this.INPUT.DIR, this.INPUT.MODEL);
    },
    get pathToInputMapping(){
        return path.join(this.INPUT.DIR, this.INPUT.MAPPING);
    },
    get pathToOutputModel(){
        return path.join(this.OUTPUT.DIR, this.OUTPUT.MODEL);
    },
    get pathToInputSample(){
        return path.join(this.INPUT.DIR, this.INPUT.SAMPLE);
    },
    
    // LDE_namePrefix: "__d_vals", // local domain value (one per (ArgsR,Location) elem),

    // locationIdSeparator: '__',

    
    preprocessModel:{
        productName: "ExtendedMAS",
        saveIntermediateModel: true, 
        locationIdSeparator: '__',
    },
    approximateDomain:{
        int16Max: 32767
    },
    generateAbstraction:{
        ld_elem_namePrefix: "__d_vals", // local domain value (one per (ArgsR,Location) elem),
    }

    // 
}

export default CONFIG;