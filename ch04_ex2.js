// add recursively
"use strict"
function addRec(arr){
    if(arr.length == 0) return 0;
    else{
        return arr[0] + addRec(arr.slice(1));
    }
}

console.log(addRec([2,3,4]));