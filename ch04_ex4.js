// Exercise 4:
"use strict";
function dataType(...args){
    for(let arg of args){
        if(typeof(arg) == "number"){
            Number.isInteger(arg) ? console.log("number") : console.log("float");
        }
        else if(typeof(arg) == "object"){
            Array.isArray(arg) ? console.log("array") : console.log("object")
        }
        else console.log(typeof(arg));
    }
}
dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {}); 