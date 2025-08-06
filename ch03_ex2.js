// sum of n numbers:
"use strict";
function add(...numbers){
    let zum = numbers.reduce((acc, value) => acc+value, 0);
    return zum;
}

console.log(add(2, 3, 4)+ add(2,1));