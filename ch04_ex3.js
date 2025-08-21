//Custom object that holds only numbers
"use strict";
class NumberValue{
    #value;                 // Value is defined as private so it cannot be redefined 
                            // without validation.
    constructor(){
        this.#value = 0;
    }
    get value(){
        return this.#value;
    }
    set newNumber(newValue){
        if(typeof(newValue) !== "number" || isNaN(newValue)){
            throw new TypeError("number expected");
        }
        this.#value = newValue;
    }
}

let aNumber = new NumberValue();
console.log(aNumber.value);
aNumber.newNumber = 5;
console.log(aNumber.value);
aNumber.newNumber = "hey";
console.log(aNumber.value);