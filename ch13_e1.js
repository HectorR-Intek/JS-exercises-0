// Chapter 13, exercise 1.
// Interactive grid.
"use strict";
const container = document.querySelector(".container");
container.addEventListener("click", event => {
    let numDiv = event.target.closest(".divNumber");
    alert(numDiv.innerHTML)  });
