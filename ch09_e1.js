// Chapter 9, exercise 1:
// string to object with properties and methods
"use strict";
function dataParse(str) {
  const obj = {};

  str = str.trim();
  if (str.startsWith('{') && str.endsWith('}')) {
    str = str.slice(1, -1).trim();
  }

  const entries = [];
  let depthBraces = 0;
  let depthParens = 0;
  let current = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '{') depthBraces++;
    if (char === '}') depthBraces--;
    if (char === '(') depthParens++;
    if (char === ')') depthParens--;
    
    if (char === ',' && depthBraces === 0 && depthParens === 0) {
      entries.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current) entries.push(current.trim());

  for (const entry of entries) {
    const [keyRaw, valueRaw] = entry.split(/:(.+)/); // divide sólo en la primera ":"
    if (!keyRaw || !valueRaw) continue;

    const key = keyRaw.trim();
    const value = valueRaw.trim();

    if (value.startsWith("function")) {
      const startArgs = value.indexOf('(');
      const endArgs = value.indexOf(')');
      const startBody = value.indexOf('{');
      const endBody = value.lastIndexOf('}');

      if (startArgs === -1 || endArgs === -1 || startBody === -1 || endBody === -1) {
        console.warn("Formato inválido de función en:", value);
        continue;
      }

      const args = value.slice(startArgs + 1, endArgs).split(',').map(s => s.trim()).filter(Boolean);
      const body = value.slice(startBody + 1, endBody);

      obj[key] = new Function(...args, body);
    } else if (!isNaN(value)) {
      obj[key] = Number(value);
    } else if (/^['"]/.test(value)) {
      obj[key] = value.slice(1, -1);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

const str = `{prop1: 42, myFn: function(a, b) { return a + b + this.prop1; }}`;
const obj = dataParse(str);
console.log(obj);
console.log(obj.myFn(1,1));
console.log(obj.prop1);        // 42
console.log(obj.myFn(1, 2));   // 45
