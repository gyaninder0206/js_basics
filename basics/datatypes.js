"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
//let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(myFunction);
myFunction()

// https://262.ecma-international.org/5.1/#sec-11.4.3


//MEMORY CONCEPT

//Primitive datatypes take stack memory and non primitive(reference) take heap memory
// in stack memory, we have a copy of the original
// in heap memory, we have a reference to the original

let myname= "Gyaninder"
let newname= myname
newname= "Rahul"

console.log(myname)
console.log(newname)

let obj1= {
    name: "rahul",
    age: 20,
}

let obj2= obj1
obj2.name= "radha"
console.log(obj1)
console.log(obj2)