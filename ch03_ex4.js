"use strict";

class Image {
  constructor(data, width, height, name) {
    if (!Array.isArray(data)) {
      throw new TypeError("data must be an Array");
    }
    if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) {
      throw new TypeError("width/height must be positive integers");
    }
    if (data.length !== width * height) {
      throw new RangeError(`data length (${data.length}) must be width*height (${width*height})`);
    }

    this.data = data;    
    this.width = width;
    this.height = height;
    this.name = name;
  }

  getPixel(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new TypeError("x and y must be integers");
    }
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      throw new RangeError("coordinates out of bounds");
    }
    const idx = y * this.width + x; 
    return this.data[idx];
  }
}

const data = new Array(1600);
for (let i = 0; i < data.length; i++) data[i] = i % 256;
const img = new Image(data, 40, 40, "myImage");

console.log(img.width);           // 40
console.log(img.height);          // 40
console.log(img.name);            // "myImage"
console.log(img.getPixel(15, 7)); // data[4*40 + 20]
