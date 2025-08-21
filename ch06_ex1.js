// Chapter 6, exercise 1:
"use strict";
class Shape{
    constructor(edges, type = "Regular polygon"){
        this.edges = edges;
        this.type = type;
    }
    display(){
        return `The ${this.type} has ${this.edges} edges`;
    }
    area(){
        throw new Error("Unimplemented method");
    }
    perimeter(){
        throw new Error("Unimplemented method");
    }
}

class Circle extends Shape{
    constructor(radius){
        super(0, "Circle");
        this.radius = radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }
    perimeter(){
        return Math.PI*2*this.radius;
    }
}

class Quadrilateral extends Shape{
    constructor(width, height){
        super(4, "Quadrilateral");
        this.width = width;
        this.height = height;
    }
    area(){
        return `The area is: ${this.width*this.height}`;
    }
    perimeter(){
        return `The perimeter is: ${2*(this.width+this.height)}`;
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super(3, "Triangle");
        this.base = base;
        this.height = height;
    }
    area(){
        return `The area is: ${(this.base*this.height)/2}`;
    }
}

const heptagon = new Shape(7, "Heptagon");
console.log(heptagon.display());

const circleOne = new Circle(1);
console.log(circleOne.area());

const square = new Quadrilateral(5, 5);
console.log(square.area());

//----------------------------------

class Animal{
    constructor(species, legs){
        this.species = species;
        this.legs = legs;
    }
    makeSound(){
        return `The ${this.species} makes a sound`;
    }
}

class Dog extends Animal{
    constructor(species = "Dog"){
        super(species, 4);
    }
    makeSound(){
        return `The ${this.species} barks`;
    }
}

class Cat extends Animal{
    constructor(species = "Cat"){
        super(species, 4);
    }
    makeSound(){
        return `The ${this.species} meows`;
    }
}

class Duck extends Animal{
    constructor(species = "Duck"){
        super(species, 2);
    }
    makeSound(){
        return `The ${this.species} quacks`;
    }
}

const fido = new Dog();
console.log(fido.species);
console.log(fido.legs);
console.log(fido.makeSound());

const cato = new Cat();
console.log(cato.species);
console.log(cato.makeSound());

const donald = new Duck();
console.log(donald.species);
console.log(donald.legs);
console.log(donald.makeSound());