//Chapter 14 exercise 1
"use strict";
const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    let rows = rowsInput.value;
    let cols = colsInput.value;
    changeLayout(rows, cols);
});

function addRow(index){
    const newRow = document.createElement("tr");
    const table = document.getElementById("table");
    table.appendChild(newRow);
}

function addCol(index){
    const newCol = document.createElement("td");
    const newContent = document.createTextNode(index);
    newCol.appendChild(newContent);
    const lastRow = document.querySelector("tr:last-child");
    lastRow.appendChild(newCol);
}

function changeLayout(rows, cols){
    table.innerHTML= "";
    for(let i = 0; i<rows; i++){
        addRow(i);
        for(let j = 0; j<cols; j++){
            addCol(j);
        }
    }
}
