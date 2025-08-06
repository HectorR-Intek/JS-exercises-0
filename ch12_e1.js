//Chapter 12, exercise 1:
"use strict";
function printAttr(element, attributes){
    const elem = document.getElementById(element)
    let attsOut = attributes.map(att =>elem.getAttribute(att));
    for(let att of attsOut){
        console.log(att);
    }
    
};

printAttr("a", ["id", "class", "style", "val"]);