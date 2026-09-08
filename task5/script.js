//  What is the difference between var, let, and const?
// var - function scope , redeclare and reassign 
// let - block scope , reassign and can't redeclare
// const - block scope , can't reassign and redeclare

//Can you re-declare a variable with var? What about let and const?
// Yes 
// let and const can't re-declare 
var name ="arun";
var name ="vikram";
console.log(name); // vikram


let age =22;
// let age =23;  // syntax error, let same scope not be re declare

//What is the output?
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z); // x=20 ,y=25, z=TypeError because conts not to be re-assign

// What is the difference between declaring and initializing a variable?

// declare- creating a variable
let name;

//initializing - Giving value 

name ="vikram";
console.log(name); // vikram

// What will be output?

let a;

console.log(a);  //undefined 

//What is hoisting? Give an example.
// Hoisting is JavaScript's behavior of processing declarations before execution, which allows certain declarations to be accessed before their actual position in the code, with behavior depending on whether we use var, let, const, functions, or classes.

console.log(e); // undefined
var e = 10;

console.log(b); //ReferenceError - let and const in temproal dead zone(TDZ)

let b=20;

//What is the difference between null and undefined?
// undefined -A variable exists but has no value.

var x;
console.log(x);  // undefined

// null - a value assignes as empty
let user=null;

console.log(user); // null

//What will be the output?
console.log(typeof null);    // object
console.log(typeof undefined); // undefined
console.log(typeof []); // object
console.log(typeof {}); // object

//What is the difference between == and ===?

//== - loose equal checks value only not checks data type
console.log(5=="5"); //true

// === - stricly equal checks value and data types
console.log(5==="5"); // false
console.log(5===5);  //true

//What is the difference between ++i and i++?
//pre increment(++i) - first increment then use the value ;
let i = 10;
let j = ++i;
console.log(i); //11
console.log(j);  //11

// post increment(i++) - first use the value the increment
let k = 10;
let l = k++;
console.log(k); //11
console.log(l);  //10

//What will be the output?
let x=10;
let y1="5";

console.log(x+y1); // 105 - string concantenation
console.log(x-y1); // 5
console.log(x*y1); // 50
console.log(x/y1); // 2

//What are logical operators?
//AND (&&) - both condition true then only returns true otherwise returns false
console.log(5>3 && 3==3); // true
console.log(5>3 && 3==="3"); //false

// OR(||) - any one condition true its returns true 
console.log(3>5 && 3==3); // true
console.log(3>5 && 3==="3"); // false

// NOR(!) - its Reverses the boolean value.
console.log(!true); // false

//: What will be the output?
console.log(5>3 && 10>5);
// true && true  - true
console.log(5>10 || 10>5);
// true || false  - true

console.log(!(5>3));
// !(true) --false

// What is the ternary operator?
// The ternary operator is a short form of if...else. 
// condition ? trueValue : falseValue;
let age1 = 18;
let vote = age1>=18? "eligible for vote":" not eligible for vote";
console.log('vote', vote)

//What is the difference between implicit and explicit type casting?

// Implicit Type Casting - Js automatically converts tupe casting;
let result="5"+2;

console.log(typeof(result)); // 52 - string

// Explicit Type Casting - a programmer manually coverts the types
let number=Number("123");

console.log(typeof(number));//123- number  

// What will be the output?
console.log(Number("123")); //123 -number
console.log(Number("hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false));//0
console.log(Boolean(0)); // false
console.log(Boolean("hello")); //true

// What is NaN?
// NaN - Not a number
let result1=Number("hello");

console.log(result1); // NaN

//What is the difference between if-else and switch?
//if-else -- Best for conditions and ranges.
let marks = 90;
if(marks>=35){
     console.log("pass");
     
}else{
    console.log("Fail");
    
}

//Switch -- Best for checking multiple exact values.

let day=1;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}

// What will be the output?
let agee=20;

if(agee>=18){
    console.log("Adult");
}else{
    console.log("Minor");
}

//output
//  Adult

// What is nested if?
// Nested if means if statement inside using another if statement
let age2=20;
let hasLicense=true;

if(age2>=18){

    if(hasLicense){
        console.log("You can drive");
    }else{
        console.log("License required");
    }

}else{
    console.log("You are underage");
}
// Output
// You can drive

// Write a program to check if a number is even or odd using ternary operator.
let num = 10;
let result2 = num%2 == 0? "Even number":"Odd Number";
console.log('result2', result2)
// Even number

// What is the difference between while and do-while?

// while - Checks the condition first.
 let x = 1;
 while(x<=10){
    console.log(x);
    x++;
    
 } // 1 2 3 4 5 6 7 8 9 10

 //do - while  -- Runs the code first, then checks the condition.

 let y2 =10;
 do{
    console.log(y2);
    y2++;
    
 }
 while(y2>15);

 // output 10

 //What will be the output?

for(let i=1;i<=5;i++){
    console.log(i);
}
//output 
// 1
// 2
// 3
// 4
// 5

// What is the difference between for-of and for-in?

// for -of -- for of loops iterable for string and array , its through values
let fruits=["Apple","Mango","Orange"];

for(let fruit of fruits){
    console.log(fruit);
}

// Apple
// Mango
// Orange

//for -in --- for in loops iterable for object and its through key or index


let employee={
    name:"Arun",
    age:25
};

for(let key in employee){
    console.log(key);
}

// output
// name
// age

//Find Sum From 1 to 100
let sum=0;
for(i=1;i<=100,i++;){
    sum+=i;

}
console.log(sum);

// 5050

// What is the difference between slice and splice?

// slice - Does not change the original array.
// Returns a new array.
// Used to copy/extract elements.
let arr=[1,2,3,4,5];

let resultArr=arr.slice(1,4); // slice(starting index,ending index+1)

console.log(resultArr);  // [2,3,4]

//splice -can change the original array
//Can add, remove, or replace elements.

let arra=[1,2,3,4,5];

arra.splice(1,2);

console.log(arra); //[1,4,5]

// What will be the output?
let ar=[1,2,3];

ar.push(4);  //[1,2,3,4]

ar.pop(); //[1,2,3]

ar.unshift(0); //[0,1,2,3]

ar.shift(); // [1,2,3]

console.log(ar); //[1,2,3]

// Difference Between Function Declaration and Function Expression
// Function Declaration - can generally be called before its declaration
greet();

function greet(){
    console.log("Hello");
}
//Hello

//Function Expression -- The function is stored in a variable,You cannot call it before initialization:
let greet=function(){
    console.log("Hello");
};

//What is an Arrow Function?
// shorter syntax of writing function, we can use this (=>)
    let add=(a,b)=>{
    return a+b;
};

console.log(add(10,20)); // 30

//What will be the output?
function greet(){
    return "Hello";
}

let message=greet();

console.log(message); // Hello



