// add recursively
"use strict"
function addRec(arr, index = 0){
    if(arr.length == index) return 0;
    else{
        return arr[index] + addRec(arr, index+1);
    }
}

console.log(addRec([2,3,4]));