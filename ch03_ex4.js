// Chapter 3, exercise 4:
"use strict";
const data = new Array(1600); // mock image of a 40 x 40.

function Image(imgData, width, height, name){
    this.width = width;
    this.height = height;
    this.name = name;

    this.getPixel = function(x,y){
        return imgData(x,y);
    }

    this.getWidth = function(){
        return this.width;
    }

    this.getHeight = function(){
        return this.height;
    }
}