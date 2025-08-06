//Chapter 14, exercise 2
"use strict";
const textContainer = document.getElementById("container");

const radioButtons = document.querySelectorAll('input[type = "radio"][name = "columnsInput"]');
radioButtons.forEach(radio => {
    console.log("done")
    radio.addEventListener('change', function() {
        if (this.checked) {
            textContainer.style.columnCount=this.value;
            console.log('Selected radio button value:', this.value);
        }
    });
});
