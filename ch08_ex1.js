// Chapter 8, exercise 1:
// Display message every minute
"use strict";

function displayer(){
    function post(){
        console.log("Every minute we get this message");
    }
    setInterval(post, 6000);

}

displayer();