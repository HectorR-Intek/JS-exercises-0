// Chapter 13, exercise 2:
// Button that can only be used 3 times.
"use strict";
const paragraph = document.getElementById("instructions");
const button = document.getElementById("button");
const meter = document.getElementById("button-usage");
function inhibitButton(){
    let timesUsed = 0;

    return function(){
        if(timesUsed <3){
            timesUsed++;
            paragraph.innerHTML = `The button below can only be used ${3-timesUsed} times`;
            meter.setAttribute("value", `${timesUsed}`);
        } 
        if(timesUsed == 3){
            button.style.backgroundColor ="red";
            paragraph.innerHTML = `The button below can no longer be used`;
            button.removeEventListener("click", buttonFunction);
        } 
    }
}

const buttonFunction = inhibitButton();
button.addEventListener("click", buttonFunction);
