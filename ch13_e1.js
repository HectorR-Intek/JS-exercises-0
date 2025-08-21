// Chapter 13, exercise 1.
// Interactive grid.
"use strict";
const container = document.querySelector(".container");
const frag = document.createDocumentFragment();
for(let i =1; i<= 25; i++){
    const cell = document.createElement("div");
    cell.className = "divNumber";
    cell.textContent = i;
    cell.dataset.num = i;
    frag.appendChild(cell);
}
container.appendChild(frag);

container.addEventListener("click", event => {
    let numDiv = event.target.closest(".divNumber");
    if(!numDiv || !container.contains(numDiv)) return;
    alert(numDiv.dataset.num)  
});
