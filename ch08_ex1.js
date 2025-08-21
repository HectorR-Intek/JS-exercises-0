// Chapter 8, exercise 1:
// Display message every minute
"use strict";

function displayer(){
    function post(){
        console.log(`Amount of milliseconds since midnight January 1, 1970: ${Date.now()}`);
    }
    setInterval(post, 60000);
}

displayer();