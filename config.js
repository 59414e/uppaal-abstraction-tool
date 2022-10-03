import * as path from 'path';

const CONFIG = {
    INPUT: {
        DIR: "./sample_input",
        MODEL: "model.xml",
        MAPPING: "mapping.txt" // list of pairs (mapping_function, scope)
    },
    OUTPUT:{
        DIR:"./output_files",
        MODEL:"./abstract_model.xml"
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
    
    LDE_namePrefix: "__d_vals", // local domain value (one per (ArgsR,Location) elem)
}

export default CONFIG;