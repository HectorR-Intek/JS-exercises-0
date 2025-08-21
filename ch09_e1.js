"use strict";

function dataParse(source) {
  if (typeof source !== "string") {
    throw new TypeError("Input must be a string.");
  }

  // Normalize curly quotes to straight quotes
  const normalized = source.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').trim();

  // If it looks like an object literal, wrap it so it's an expression
  const wrapped = /^\s*\{[\s\S]*\}\s*$/.test(normalized)
    ? `(${normalized})`
    : normalized;

  try {
    const make = new Function(`"use strict"; return ${wrapped};`);
    const obj = make();

    if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      throw new Error("Parsed value is not an object.");
    }
    return obj;
  } catch (err) {
    throw new Error("Invalid object-like string: " + err.message);
  }
}

const str = `{ 
  prop1: 7, 
  arr: [1, 2, 3], 
  myFn: function(a, b) { return a + b + this.prop1; } 
}`;
const obj = dataParse(str);
console.log(obj.prop1);        // 42
console.log(obj.arr[2]);       // 3
console.log(obj.myFn(1, 2));   // 45
