// Exercise 5: Calculate distance between points.
// Input should be in (x,y) format or (x,y,Z).
"use strict";
function distance(...args){
    for(let arg of args){
        if(typeof(arg) !== "number") return typeof(arg);
    }
    if(args.length == 4) return (Math.sqrt((args[2]-args[0])**2+(args[3]-args[1])**2));
    else if(args.length == 6) return Math.sqrt((args[3]-args[0])**2+(args[4]-args[1])**2+(args[5]-args[2])**2);
    else return "Error: There should be either 4 or 6 parameters";
}

console.log(distance(2,2,4,-2,5,1));