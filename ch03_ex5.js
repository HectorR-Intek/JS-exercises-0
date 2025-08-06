// Exercise 5
"use strict";
function customObject(a,b){
    this.a = a;         //Instance properties
    this.b = b;

}

customObject.prototype.c = "Prototype property";

const printObjProp = function(obj, onlyInstance){
    let toPrint = [];
    if(onlyInstance){
        for(let property in obj){
            if(Object.hasOwn(obj, property)) toPrint.push(property);
        }
        return toPrint;
    }
    for(let property in obj){
        toPrint.push(property);
    }
    return toPrint;
}

const firstInstance = new customObject(1,2);
console.log(printObjProp(firstInstance));
console.log(printObjProp(firstInstance, true));
