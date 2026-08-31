//  Task 1 — var, let, const

var studentName ="vikram";
let studentAge = 24;
const collegeName = "GCT";

//1.Print all three values.

console.log("studentName:",studentName, "studentAge:",studentAge,"collegeName:",collegeName); //studentName: vikram studentAge: 24 collegeName: GCT

//2.Change the var value.
studentName ="Naveen";
console.log("studentName:",studentName, "studentAge:",studentAge,"collegeName:",collegeName);  //studentName: Naveen studentAge: 24 collegeName: GCT

//3.Change the let value.
studentAge =22;
console.log("studentName:",studentName, "studentAge:",studentAge,"collegeName:",collegeName);  // studentName: Naveen studentAge: 22 collegeName: GCT

//4.Try changing the const value and observe the error.
// collegeName = "KIT"
// console.log(collegeName);
// TypeError: Assignment to constant variable.

//5.Try redeclaring the var variable.
var studentName ="vikram";
 var studentName ="Ram"
console.log(studentName);  // Ram

//6.Try redeclaring the let variable and observe the error.
// let studentAge =24;
// let studentAge =22;
//SyntaxError: Identifier 'studentAge' has already been declared


//Task 2 — User Information

//Get the following information from the user using prompt():
// Name
// Age
// City
// Print the result in the console.

var name = prompt("Enter your Name");
let age = prompt("Enter your Age");
const city = prompt("Enter your City");

console.log("Name:",name);
console.log("Age:",age);
console.log("City:",city);

//Task 3 — Welcome Message

let name1 = prompt("Enter your name");
alert("Welcome " + name1 +"!");

//  Task 4 — Age Calculator

let currentyear = new Date().getFullYear();
let birthYear = prompt("Enter your birth year");

let currentAge = currentyear - birthYear;
console.log( "birthYear:",birthYear);
console.log("Age:",currentAge);

//Data Type Tasks
// Task 5 — Identify Data Types

let a1 = "Hello";
let b1 = 100;
let c = 25.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(typeof a1); // "string"
console.log(typeof b1); // "number"
console.log(typeof c); // "number"
console.log(typeof d); // "boolean"
console.log(typeof e); // "boolean"
console.log(typeof f); // "undefined"
console.log(typeof g); // "object"  (this is a well-known JS quirk/bug)

//Task 6 — Student Data

const studentData ={
    "name":"vikram",
    "age":23,
    "city":"coimbatore",
    "qualification":"B.Tech",
    "isStudent":true
}
console.log(studentData);
console.log(studentData.name);
console.log(studentData.age);
console.log(studentData.qualification);
console.log(studentData.isStudent);

// Task 7 — Fruit Array

let fruit =["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total number of fruits:", fruits.length);

// Arithmetic Operator Tasks
// Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b); //25
console.log("Subtraction:", a - b); //15
console.log("Multiplication:", a * b); //100
console.log("Division:", a / b); //4
console.log("Modulus:", a % b); //0 
console.log("Exponentiation:", a ** b); // 3200000

// Task 9 — Shopping Bill
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;

let totalPrice = Shirt + Pant + Shoes;
console.log("TotalPrice:",totalPrice);

// Task 10 — Simple Marks Calculation

let Tamil = 80;
let English = 75;
let Maths = 90;

let TotalMarks = Tamil + English +Maths;
let averageMarks = TotalMarks /100

console.log("Total marks",TotalMarks);
console.log("Average Mark",averageMarks);



 









