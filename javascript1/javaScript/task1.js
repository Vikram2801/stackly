// 1. What is a variable in JavaScript?
// A variable is a named container used to store data values that can be used and changed later in a program.

// 2. Three keywords used to create variables:
// var, let, const

// 3. Syntax using var?
// var variableName = value;
var name = "vikram";

// 4. Syntax using let?
// let variableName = value;
let marks = 20;

// 5. Syntax using const?
// const variableName = value;
const area = "coimbatore";

// 6. What is declaration?
// Declaration means creating a variable (giving it a name) without necessarily assigning a value.
let y;

// 7. What is initialization?
// Initialization means assigning the first value to a declared variable.
let z = 10; // declaration + initialization

// 8. What is reassignment?
// Reassignment means changing the value of a variable that already has a value.
let num = 10;
num = 20; // reassignment

// 9. What is redeclaration?
// Redeclaration means declaring the same variable name again using var/let/const keyword.
var count = 10;
var count = 20; // redeclaration

// 10. Which keyword allows redeclaration?
// var

// 11. Which keyword allows reassignment?
// var and let (not const)

// 12. Which keyword requires initialization when declared?
// const

// 13. Identify the declaration and initialization:
let w = 25;
// Declaration: let w
// Initialization: = 25

// 14. What is the value of a?
var a = 100;
console.log(a); // 100

// 15. Change the value of this variable to 200:
let number = 100;
number = 200;

// 16. What will be the output?
var a1 = 10;
console.log(a1); // 10

// 17. What will be the output?
var a2 = 10;
a2 = 20;
console.log(a2); // 20

// 18. What will be the output?
var a3 = 10;
var a3 = 30;
console.log(a3); // 30

// 19. Write a var variable named name with the value "John".
var name19 = "John";

// 20. Create a var variable named price with the value 500.
var price = 500;
console.log(price); // 500

// 21. Reassign price from 500 to 1000.
price = 1000;
console.log(price); // 1000


// 22. What will be the output?
var x = 50;
x = 100;
console.log(x); // 100

// 23. Can a var variable be reassigned?
// Yes

// 24. Can a var variable be redeclared?
// Yes

// 25. Write an example of var redeclaration.
var city = "Chennai";
var city = "Salem";
console.log(city); // "Salem"

// ---------------- let ----------------

// 26. Create a let variable named age with the value 25.
let age26 = 25;

// 27. What will be the output?
let age27 = 20;
age27 = 30;
console.log(age27); // 30

// 28. Can a let variable be reassigned?
// Yes

// 29. Can a let variable be redeclared?
// No, not in the same scope

// 30. Find the error:
// let name = "John";
// let name = "David";
// Error: SyntaxError: Identifier 'name' has already been declared

// 31. Create a let variable called city and assign "Chennai".
let city31 = "Chennai";

// 32. Change the value of city to "Salem".
city31 = "Salem";

// 33. What will be the output?
let x33 = 10;
x33 = 50;
console.log(x33); // 50

// 34. Write a let variable called salary with the value 25000.
let salary = 25000;

// 35. Reassign salary to 30000.
salary = 30000;

// ---------------- const ----------------

// 36. Create a const variable called pi with the value 3.14.
const pi = 3.14;

// 37. Can a const variable be reassigned?
// No

// 38. Can a const variable be redeclared?
// No

// 39. What is wrong with this code?
// const age;
// age = 25;
// Error: SyntaxError: Missing initializer in const declaration
// A const must be initialized at the time of declaration.

// 40. What happens here?
// const price = 500;
// price = 1000;
// Error: TypeError: Assignment to constant variable.

// 41. Create a const variable called country with the value "India".
const country = "India";

// 42. What will be the output?
const x42 = 100;
console.log(x42); // 100

// 43. Which keyword should you use if the value should not be reassigned?
// const

// 44. What is the difference between let and const?
// let allows reassignment of its value; const does not allow reassignment after initialization.
// Both are block-scoped and cannot be redeclared in the same scope.

// 45. What is the difference between var and const?
// var is function-scoped (or global-scoped), can be redeclared and reassigned,
// and is hoisted with an initial value of undefined.
// const is block-scoped, cannot be redeclared or reassigned, and must be initialized when declared.

// ---------------- Printing & Console ----------------

// 46. Write JavaScript code to print Hello World using console.log().
console.log("Hello World");

// 47. Write JavaScript code to print the number 500 using console.log().
console.log(500);

// 48. What is the purpose of console.warn()?
// Displays a warning message in the console (usually shown in yellow),
// used to alert about potential issues that aren't errors.
console.warn("This is a warning message");

// 49. What is the purpose of console.error()?
// Displays an error message in the console (usually shown in red),
// used to indicate something went wrong.
console.error("This is an error message");

// 50. What is the purpose of each?

// alert() - Shows a popup dialog box with a message and an OK button; used to display information to the user.
alert("Hello!");

// prompt() - Shows a popup dialog box that asks the user for input and returns the entered value (or null if cancelled).
let userName = prompt("Enter your name:");

// confirm() - Shows a popup dialog box with OK and Cancel buttons; returns true if OK is clicked, false if Cancel is clicked.
let isSure = confirm("Are you sure?");

// document.writeln() - Writes text/HTML directly into the HTML document, followed by a newline (mostly outdated, rarely used in modern JS).
document.writeln("Hello World");

// console.log() - Prints/logs messages, variables, or data to the browser's developer console; mainly used for debugging.
console.log("Debugging message");






// Create a variable for student name, age, and mark and print all three.

var studentName = "vikram";
let age = 25;
const mark = 97

console.log(studentName,age,mark);


// Ask the user's name using prompt() and display it using alert().

let name = prompt("Enter your name:");
alert("Hello " + name);

// Ask the user's age using prompt() and print it using console.log().

const userAge = prompt("Enter your age");
console.log("userAge:",userAge)

// Ask the user a question using confirm().

let askQuestion = confirm("Are you sure delete ?");
console.log(askQuestion);

//Ask the user's name and display it on the webpage using document.writeln().
var city =  prompt('enter your city')
document.writeln("Welcome to " + city);