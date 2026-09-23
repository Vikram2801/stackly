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

var name11 = prompt("Enter your Name");
let age = prompt("Enter your Age");
const city = prompt("Enter your City");

console.log("Name:",name11);
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
console.log("First fruit:", fruit[0]);
console.log("Second fruit:", fruit[1]);
console.log("Last fruit:", fruit[fruit.length - 1]);
console.log("Total number of fruits:", fruit.length);

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

// Task 11 — Post Increment
let a2 = 10;

let b2 = a2++;

console.log(a2); //11
console.log(b2); //10


// Task 12 — Pre Increment

let a3 = 10;

let b3 = ++a3;

console.log(a3); //11
console.log(b3); //11
 
// Task 13 — Post Decrement

let a4 = 20;

let b4 = a4--;

console.log(a);//19
console.log(b);//20

// Task 14 — Pre Decrement


let a5 = 20;

let b5 = --a5;

console.log(a5); //19
console.log(b5);//19

// Task 15 — Find the Final Values


let a6 = 5;

let b6 = a++;

let c6 = ++a;

let d6 = b--;

console.log(a6); //7
console.log(b6); //4 
console.log(c6); //7
console.log(d6); //5


//Task 16 — Assignment Operators

let num = 10;
num +=5;
console.log(num); //15

let num1 = 10;
num1 -=5;
console.log(num1); // 5

let num2 = 10;
num2 *=5;
console.log(num2); //50

let num3 =10;
num3 /=5;
console.log(num3); //2

let num4 = 10;
num4 %= 3
console.log(num4); //1

let num5 =10;
num5 **= 2
console.log(num5); //100


//Task 17 — Mini Student Profile

//variables
let name = "Vikram";
let age1 = 22;
let city1 = "Coimbatore";
let college = "GCT College";

//Array

let favSubject = ["HTML","CSS","Javascript","Node","Python"] ;

//object

let studentProf ={
    "name":"vikram",
    "age":23,
    "city":"coimbatore",
    "subjects": favSubject,
    "isStudent":true
}

console.log("Student Name:", studentProf.name);
console.log("Student Age:", studentProf.age);
console.log("City:", studentProf.city);
console.log("First Subject:", studentProf.subjects[0]);
console.log("Last Subject:", studentProf.subjects[studentProf.subjects.length - 1]);
console.log("Total Subjects:", studentProf.subjects.length);
console.log("Complete Object:", studentProf);


//Final Task

let num6 = Number(prompt("Enter first number:"));
let num7 = Number(prompt("Enter second number:"));

console.log("Addition:", num6 + num7);
console.log("Subtraction:", num6 - num7);
console.log("Multiplication:", num6 * num7);
console.log("Division:", num6 / num7);
console.log("Modulus:", num6 % num7);
console.log("Power:", num6 ** num7);





