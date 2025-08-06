// Chapter 10, exercise 1.
// Using with statement is not possible in strict mode.
const myLib = {
	math: {
		real: {
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
		},
		complex: {
			Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
        },
        matrix: {
	               add: function (a, b){ /*matrix addition*/},
	               sub: function (a, b){ /*matrix subtraction*/},
	               mul: function (a, b){ /*matrix multiplication*/},
	               eye: function (size){ /*identity matrix*/},
	               dot: function (m, a){ /*dot product*/},
	               times:function(a, b){ /*element-wise multiplication*/}
	    }
	}
};

// ---- Function calls -------

let answer = myLib.math.real.sub(
                  myLib.math.real.add (20, 22), 
                  myLib.math.real.mul(2,5));

let ans = myLib.math.matrix.times(
              myLib.math.matrix.eye (4), 
              myLib.math.complex.sub (
                      new myLib.math.complex.Num (
                             myLib.math.real.add(5,2),
                             -3), 
                      new myLib.math.complex.Num (3,4)
              )
          );

// -------- Using with statement: ----------

with(myLib.math.real){
    let answer_with = sub(add(20, 22), mul(2,5));
};

with(myLib.math){
    let ans_with = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5,2), -3), new complex.Num(3,4)));
};

//-------- without using with statement ------

const {add, sub, mul} = myLib.math.real;
let answer_without = sub(add(20,22), mul(2,5));

const {real, complex, matrix} = myLib.math;
let ans_without = matrix.times(matrix.eye(4), complex.sub(
                                                 new complex.Num(real.add(5,2),-3),
                                                 new complex.Num(3,4)));
