// Exercise 1: Transform hexadecimal to rgb
//  Using regular expressions:
"use strict";
function hexToRGB(hex){
    const hexRegex = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;
    const found = hex.match(hexRegex);

    const r = parseInt(found[1], 16);
    const g = parseInt(found[2], 16);
    const b = parseInt(found[3], 16);

    return `rgb(${r},${g},${b})`;
}

const num1 = "#3043AA";
const num2 = "#555666";
const num3 = "#ABCDEF";
console.log(hexToRGB(num1));
console.log(hexToRGB(num2));
console.log(hexToRGB(num3));