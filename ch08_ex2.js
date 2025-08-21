//Create functions A, B, and C that execute every 30s, 1min, and 1min 15s respectively. 
// Use only 1 timer/interval to control all three functions. 
"use strict";
function control(){
    let unitsOfFifteen = 0;

    return function(){
        unitsOfFifteen++;
        if(unitsOfFifteen == 11) unitsOfFifteen =  1;
        caller(unitsOfFifteen);
        return;
    }
}
function thirty(){
        console.log("Each thirty seconds");
        return;
    }
function sixty(){
        console.log("Each sixty seconds");
        return;
    }
function seventyfive(){
        console.log("Each seventyfive seconds");
        return;
    }

function caller(n){
    const divisors = [2,4,5];

    for(let divisor of divisors){
        if(n%divisor==0){
            switch(divisor){
            case 2:
                thirty();
                break;
            case 4:
                sixty();
                break;
            case 5:
                seventyfive();
                break;
            default:
                return;
            }
        }
    }
    
}

const controlFn = control();
setInterval(controlFn, 1500); // I changed 15 seconds to 1.5 seconds to debug quicker.