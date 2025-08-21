"use strict";
function MyMath(){
    this.add = function(...numbers){
        let result = numbers.reduce((acc, curr)=> acc+curr, 0);
        return result;
    }
    this.mul = function(...numbers){
        if(numbers.length === 0){
            return 0;
        }
        let result = numbers.reduce((acc,curr)=> acc*curr, 1);
        return result;
    }
    this.fact = function(number){
        let result = 1;
        for(let i=number; i>0; i--){
            result *= i;
        }
        return result;
    }
}
const myMath = new MyMath();
console.log(myMath.add(1,2,3,4));
console.log(myMath.mul(3,4,5));
console.log(myMath.fact(5));
console.log(myMath.mul());