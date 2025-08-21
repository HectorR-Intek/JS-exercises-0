// Chapter 14 exercise 1
"use strict";

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const button = document.getElementById("button");
const table = document.getElementById("table");

button.addEventListener("click", () => {
  const rows = parseInt(rowsInput.value, 10) || 0;
  const cols = parseInt(colsInput.value, 10) || 0;
  changeLayout(rows, cols);
});

function addRow(parent) {
  const tr = document.createElement("tr");
  parent.appendChild(tr);
  return tr;
}

function addCell(rowEl, content) {
  const td = document.createElement("td");
  td.textContent = content;
  rowEl.appendChild(td);
}

function changeLayout(rows, cols) {
  table.replaceChildren();

  if (rows <= 0 || cols <= 0) return;

  const frag = document.createDocumentFragment();

  for (let i = 0; i < rows; i++) {
    const tr = addRow(frag);
    for (let j = 0; j < cols; j++) {
      addCell(tr, j);
    }
  }

  table.appendChild(frag);
}
