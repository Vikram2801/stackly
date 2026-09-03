// Task 1 — Variables

var name = "vikram";
let age = 23;
const city = "Dharmapuri";
var college = "GCT College"; // using var for one, let's also show college as let per requirement mix
let college2 = "GCT College";

console.log(name, age, city, college);

// Change var value
name = "Kumar";
console.log("Updated var:", name);

// Change let value
age = 26;
console.log("Updated let:", age);

// Try changing const value
// city = "cbe"
// console.log(city);   TypeError: Assignment to constant variable.


// Redeclare each variable
var name = "Redeclared"; //allowed, no error
console.log(name);

// let age = 30; // SyntaxError: Identifier 'age' has already been declared
// const city = "Madurai"; // SyntaxError: Identifier 'city' has already been declared


// Task 2 — Printing Statements
console.log("Hello from console.log");

alert("Hello from alert"); // shows a popup, browser only

confirm("Are you sure?"); // returns true/false based on OK/Cancel, browser only

let userInput = prompt("Enter your name:"); // returns text input, browser only

document.writeln("Hello from document.writeln"); // writes directly to HTML page

//alert(), confirm(), and prompt() only work in a browser console/page — not in Node.js.



//Task 3 — User Details

let name = prompt("Enter your name:");
let age1 = prompt("Enter your age:");
let city1 = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");

console.log("Name:", name);
console.log("Age:", age1);
console.log("City:", city1);
console.log("Qualification:", qualification);

// Task 4 — Find Data Types
let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a); //string
console.log(b, typeof b); //number
console.log(c, typeof c); //number
console.log(d, typeof d); //boolean
console.log(e, typeof e); //boolean
console.log(f, typeof f); //undefined
console.log(g, typeof g); //object 

//Task 5 — Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]); // Arun
console.log("Second student:", students[1]); //Priya
console.log("Last student:", students[students.length - 1]); //Rahul
console.log("Total students:", students.length); //5

// Task 6 — Employee Object

let employee = {
  name: "Vikram",
  age: 23,
  role: "Developer",
  skills: ["JavaScript", "React", "Node.js"],
  isWorking: true,
  qualification: ["B.Tech", "M.Tech"]
};

console.log("Employee name:", employee.name);  // vikram
console.log("Age:", employee.age);  //23
console.log("Role:", employee.role); // Developer
console.log("First skill:", employee.skills[0]); //javascript
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]); // M.Tech
console.log("Working status:", employee.isWorking); //true



// Task 7 — Calculator
let x= 20;
let y = 5;

console.log("Addition:", x+ y);       // 25
console.log("Suytraction:", x- y);    // 15
console.log("Multiplication:", x* y); // 100
console.log("Division:", x/ y);       // 4
console.log("Modulus:", x% y);        // 0
console.log("Exponentiation:", x** y);// 3200000

//Task 8 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;
console.log("Total price:", total); // 5296

//Task 9 — Increment & Decrement

let p = 10;

let R = a++;

console.log(P); //11
console.log(R); //10

let a2 = 10;

let b2 = ++a;

console.log(a2); //11
console.log(b2); //11

let a3 = 10;

let b3 = a--;

console.log(a3);//9
console.log(b3); //10

let a4 = 10;

let b4 = --a;

console.log(a4);//9
console.log(b4);//9

//Task 10 — Assignment Operators
let num = 10;

num += 5;   console.log(num); // 15
num -= 3;   console.log(num); // 12
num *= 2;   console.log(num); // 24
num /= 4;   console.log(num); // 6
num %= 3;   console.log(num); // 0
num **= 2;  console.log(num); // 0

//Task 11 — Find The Output

console.log(10 > 5); //True
console.log(10 < 5); //false
console.log(10 >= 10); //True
console.log(10 <= 9); //False

console.log(5 == "5") // True;
console.log(5 === "5"); //False

console.log(10 != "10"); //False
console.log(10 !== "10"); //True

// Task 12 — AND (&&)


console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

//Task 13 — OR (||)
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

//Task 14 — NOT (!)
console.log(!true);        // false
console.log(!false);       // true
console.log(!(5 > 10));    // true  (5 > 10 is false, !false = true)
console.log(!(10 > 5));    // false (10 > 5 is true, !true = false)

// Task 15 — Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);
// 5=="5" -> true, 5===5 -> true so !(true) -> false
// true && false -> false; false || (6>7=false) -> false
// Result: false

console.log(10 > 5 && 8 < 12 || 4 === "4");
// true && true -> true; true || false -> true
// Result: true

console.log(7 === 7 && 10 != "10" || 5 >= 5);
// 7===7 -> true, 10!="10" -> false (values equal)
// true && false -> false; false || true(5>=5) -> true
// Result: true

console.log(15 < 10 || 20 > 15 && 5 == "5");
// && has higher precedence than ||
// 20>15 -> true, 5=="5" -> true, so true && true -> true
// 15<10(false) || true -> true
// Result: true

//  Ternary Operator Tasks
// Task 16 — Voting

let age2 = 20;
let result = age2 >= 18 ? "Eligible to vote" : "Not eligible";
console.log(result); //Eligible to vote

//Task 17 — Password (Ternary)
let Password= true;
let login =  Password? "Login successful" : "Wrong password";
console.log(login);  //Login successful

//Task 18 — User Introduction
let name1 = "Naveen";
let age4 = 25;
let city2 = "Trichy";

// Using +
console.log("My name is " + name1 + ". I am " + age4 + " years old. I live in " + city2 + ".");

// Using template literals
console.log(`My name is ${name1}. I am ${age4} years old. I live in ${city2}.`);

//Task 19 — String Conversion
console.log(String(100), typeof String(100));         // "100" string
console.log(String(true), typeof String(true));       // "true" string
console.log(String(undefined), typeof String(undefined)); // "undefined" string
console.log(String(null), typeof String(null));        // "null" string
console.log(String([1, 2]), typeof String([1, 2]));    // "1,2" string

// Task 20 — Number Conversion
console.log(Number());          // 0   (no argument treated as empty -> 0)
console.log(Number(""));        // 0   (empty string -> 0)
console.log(Number("123"));     // 123
console.log(Number("a1"));      // NaN (not a valid number string)
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0

//Task 21 — Boolean Conversion

console.log(Boolean());        // false
console.log(Boolean(""));      // false (empty string is falsy)
console.log(Boolean("hello")); // true
console.log(Boolean(123));     // true
console.log(Boolean(true));    // true
console.log(Boolean(false));   // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));    // false
console.log(Boolean([]));      // true  (empty array is truthy!)
console.log(Boolean({}));      // true  (empty object is truthy!)

// Task 22 — Voting Eligibility

let age5 = prompt("Enter your age:");
age5= Number(age5);

if (age5 >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}


//Task 23 — Positive or Negative
let num1 = Number(prompt("Enter a number:"));

if (num1 > 0) {
  console.log("Positive");
} else if (num1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Task 24 — Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
  console.log("A Grade");
} else if (marks >= 80) {
  console.log("B Grade");
} else if (marks >= 70) {
  console.log("C Grade");
} else if (marks >= 60) {
  console.log("D Grade");
} else {
  console.log("Fail");
}

//Task 25 — Job Eligibility (Nested If)
let agee = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height (cm):"));
let weight = Number(prompt("Enter your weight (kg):"));

if (agee >= 18) {
  if (height >= 160) {
    if (weight >= 60) {
      console.log("Congratulations! You are selected");
    } else {
      console.log("Sorry, weight requirement not met");
    }
  } else {
    console.log("Sorry, height requirement not met");
  }
} else {
  console.log("Sorry, age requirement not met");
}


//Task 26 — Traffic Light (Switch)
let light = prompt("Enter traffic light color (red/yellow/green):");

switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

//Task 27 - Day Switch
let day = 1;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// Final Task

// Step 1 — User details
let name = prompt("Enter your name:");
let age6 = Number(prompt("Enter your age:"));
let city3 = prompt("Enter your city:");

// Step 2 — Marks
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 — Calculate
let total1 = tamil + english + maths;
let average = total1 / 3;

// Step 4 — Grade check
let grade;
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "Fail";
}

// Step 5 — Voting eligibility
let voting = age6 >= 18 ? "Eligible" : "Not Eligible";

// Step 6 — Display
console.log(`
Name: ${name}
Age: ${age6}
City: ${city3}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);

