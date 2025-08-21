// Exercise 6: 
// Distance between points in 2D and 3D but different input format.
"use strict";
function distance(...args){
    let orderedNumbers = [];

    function calculation(...args){
        if(args.length == 4){
            return Math.sqrt((args[2]-args[0])**2 + (args[3]-args[1])**2);
        }
        else if(args.length == 6){
            return Math.sqrt((args[3]-args[0])**2+(args[4]-args[1])**2+(args[5]-args[2])**2);
        }
        else throw new Error("Incorrect number of input parameters.");
    }
    
    for(let arg of args){
        if(typeof(arg) === "object"){
            for(let param of arg){
                if(typeof(param) !== "number") throw new TypeError(`Input ${param} is not a number`);
                orderedNumbers.push(param)
            }
        }else if(typeof(arg)=== "number"){
            orderedNumbers.push(arg);
        }else{
            throw new TypeError(`Input ${arg} is not a number`);
        }
    }
    return calculation(...orderedNumbers);
    
}

console.log(distance(1,2,2,5));
console.log(distance(1,2,"two",5));
console.log(distance([1,2], [2,5]));
console.log(distance([1,2], [2,"five"]));
