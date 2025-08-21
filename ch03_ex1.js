// Multiplication of 2 numbers, base 13.
"use strict";
/*
function multBaseThirteen(a,b){
    const product = a*b;
    let solution = "";
    const logProduct = Math.log(product)/Math.log(13);
    const highestPower = Math.floor(logProduct);
    let dividend = product;

    for(let i = highestPower; i> 0; i--){
        let digit = Math.floor(dividend/(13**i));
        solution += digit;
        dividend = dividend % (13**i);
    }
    solution += dividend;
    return parseInt(solution);

}*/

function multBaseThirteen(a,b){
    let product = a*b;
    return product.toString(13);
}

console.log(multBaseThirteen(13,2));
console.log(multBaseThirteen(5,2));

//-----

