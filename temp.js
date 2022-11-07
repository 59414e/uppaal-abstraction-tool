String.prototype.interpolate = function(params) {
    const names = Object.keys(params);
    const vals = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...vals);
}
  
const NS_PER_SEC = 1e9;
let measureTime = (cb)=>{
    let hrStart = process.hrtime();
    cb();
    let hrDiff = process.hrtime(hrStart);
    return (hrDiff[0]*NS_PER_SEC + hrDiff[1])/1000000;
}

const template = 'Example text: ${text}, value of x=${x}, and the value of y=${y}\nExample text: ${text}, value of x=${x}, and the value of y=${y}\nExample text: ${text}, value of x=${x}, and the value of y=${y}\nExample text: ${text}, value of x=${x}, and the value of y=${y}\nExample text: ${text}, value of x=${x}, and the value of y=${y}\nExample text: ${text}, value of x=${x}, and the value of y=${y}\nExample text: ${text}, value of x=${x}, and the value of y=${y}';


const templateString = "Hello ${this.name}! Val of x = ${this.x || 'x'}";

const template1='Example text: ${this.text}, value of x=${this.x ?? "x"} and value of y = ${this.y ?? "y"}';
const templateVars = {
    text: "myText",
    x:0
}

const fillTemplate = function(templateString, templateVars){
    return new Function("return `"+templateString +"`;").call(templateVars);
}

const fillTemplate1 = function(templateString){
    return new Function("return `"+templateString +"`;");
}

let t1 = measureTime(()=>{
    for(let i=0;i<1000000;i++){
        fillTemplate(template1, templateVars)
    }
})

let t2 = measureTime(()=>{
    let f = fillTemplate1(template1);
    for(let i=0;i<1000000;i++){
        f.call(templateVars)
    }
})


console.log({t1,t2});

