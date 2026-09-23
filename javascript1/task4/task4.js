//  Task 1 — For Loop

for(let a =1;a<=10;a++){
    console.log(a);
    
}
// Task 2 — Reverse Number
 for(let b =10;b>=1;b--){
    console.log(b);
    
}

//Task 3 — Even Numbers
 for(let c =1;c<=20;c++){
    if(c%2==0){
        console.log(c);
    }
}

//Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.

 for(let i=1;i<=20;i++){
    if(i%2==1){
        console.log(i);
    }
}

// Task 5 — Multiplication Table
let num = prompt("Enter the number");
for(let i =1;i<=10;i++){
    console.log(`$(num) X $(i) = $(num *i)`);
    
}

// While Loop
// Task 6 — Countdown
let i =10;
while(i>=10){
    console.log(i);
    i--;
    
}

// Task 7 — Sum of Numbers
let j=1;
let sum=0;
while(j<=10){
    sum+=j;
    j++;
       
}
console.log(sum);

// Task 8 — Print Numbers(dowhile)
let x=1;
do{
    console.log(x);
    x++;
    
}
while(x<=5);

// Task 9 — Do While Understanding
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);  //10  Do it first, then check,It runs the code one time no matter what.if condition true means it returns 

// Task 10 — String Characters
let name = "javascript";

for (let character of name) {
    console.log(character);  // forof loops through the values of an iterable. forof loops iterable for strings and array so output will be come  string character one by one  
}
// j
// a
// v
// a
// s
// c
// r
// i
// p
// t

// Task 11 — Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}

// Task 12 — Student Names
let students=["Arun","Priya","Naveen","Kumar","Divya"];

for(let studentName of students){
    console.log("Student: "+studentName);
}

// Output:
// Student: Arun
// Student: Priya
// Student: Naveen
// Student: Kumar
// Student: Divya


// Task 13 — Employee Object
let employeeDetails={
    name:"Arun",
    age:25,
    role:"Developer",
    city:"Chennai"
};

for(let key in employeeDetails){
    console.log(key+" "+employeeDetails[key]);
}

// Output:
// name Arun
// age 25
// role Developer
// city Chennai


// Task 14 — Product Object
let product={
    productName:"Laptop",
    price:50000,
    brand:"Dell",
    category:"Electronics",
    stock:10
};

for(let key in product){
    console.log(key+": "+product[key]);
}

// Output:
// productName: Laptop
// price: 50000
// brand: Dell
// category: Electronics
// stock: 10


// Task 15 — Simple Function
function welcome(){
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Output:
// Welcome to JavaScript
// Welcome to JavaScript
// Welcome to JavaScript


// Task 16 — Function With Parameter
function greet(personName){
    console.log("Hello "+personName);
}

greet("Naveen");
greet("Arun");
greet("Priya");

// Output:
// Hello Naveen
// Hello Arun
// Hello Priya


// Task 17 — Multiple Parameters
function student(name,age,department){
    console.log("Name: "+name);
    console.log("Age: "+age);
    console.log("Department: "+department);
}

student("Arun",21,"Computer Science");
student("Priya",22,"IT");
student("Naveen",23,"Mechanical");

// Output:
// Name: Arun
// Age: 21
// Department: Computer Science
// Name: Priya
// Age: 22
// Department: IT
// Name: Naveen
// Age: 23
// Department: Mechanical


// Task 18 — Addition Function
function add(a,b){
    return a+b;
}

let additionResult=add(10,20);

console.log(additionResult);

// Output:
// 30


// Task 19 — Salary
function salary(amount){
    return amount;
}

let employeeSalary=salary(50000);

console.log(employeeSalary);

// Output:
// 50000


// Task 20 — Bonus Calculator
function bonus(employeeSalary,bonusAmount){
    return employeeSalary+bonusAmount;
}

let totalSalary=bonus(50000,5000);

console.log("Total Salary: "+totalSalary);

// Output:
// Total Salary: 55000


// Task 21 — Default Parameter
function employee(name,role="Developer"){
    console.log("Name: "+name);
    console.log("Role: "+role);
}

employee("Arun");
employee("Priya","Designer");

// Output:
// Name: Arun
// Role: Developer
// Name: Priya
// Role: Designer


// Task 22 — Named Function
function square(number){
    return number*number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(10));

// Output:
// 4
// 9
// 16
// 25
// 100


// Task 23 — Anonymous Function
let calculate=function(a,b){
    return a+b;
};

let calculateResult=calculate(10,20);

console.log(calculateResult);

// Output:
// 30


// Task 24 — Arrow Function
let multiply=(a,b)=>{
    return a*b;
};

let multiplyResult=multiply(10,5);

console.log(multiplyResult);

// Output:
// 50


// Task 25 — Scope
function test(){
    if(true){
        var scopeA=10;
        let scopeB=20;
        const scopeC=30;

        console.log(scopeA);
        console.log(scopeB);
        console.log(scopeC);
    }

    console.log(scopeA);

    // console.log(scopeB);
    // ReferenceError

    // console.log(scopeC);
    // ReferenceError
}

test();

// Output:
// 10
// 20
// 30
// 10


// Task 26 — Hoisting With var

console.log(hoistA);

var hoistA=10;

// Output:
// undefined


// Task 27 — Hoisting With let

// console.log(hoistB);
// let hoistB=20;

// Output:
// ReferenceError: Cannot access 'hoistB' before initialization


// Task 28 — Hoisting With const

// console.log(hoistC);
// const hoistC=30;

// Output:
// ReferenceError: Cannot access 'hoistC' before initialization


// Task 29 — IIFE

(function(){
    console.log("Welcome to JavaScript");
})();

(function(product,discount){
    console.log(product+" has "+discount+"% discount");
})("Laptop",20);

// Output:
// Welcome to JavaScript
// Laptop has 20% discount


// Task 30 — Callback Function

function welcomeCallback(){
    console.log("Welcome");
}

function execute(callback){
    callback();
}

execute(welcomeCallback);

// Output:
// Welcome


// Task 31 — Generator Function

function* cashback(){
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let offers=cashback();

for(let offer of offers){
    console.log(offer);
}

// Output:
// 10% cashback
// 20% cashback
// 30% cashback
// Better luck next time


// Task 32 — Employee Management System

let employees=[
    {
        name:"Arun",
        age:25,
        department:"IT",
        role:"Developer",
        salary:40000
    },
    {
        name:"Priya",
        age:24,
        department:"HR",
        role:"HR Executive",
        salary:35000
    },
    {
        name:"Naveen",
        age:28,
        department:"Finance",
        role:"Accountant",
        salary:50000
    }
];


// for...of

for(let employee of employees){
    console.log(employee);
}

// Output:
// {name: "Arun", age: 25, department: "IT", role: "Developer", salary: 40000}
// {name: "Priya", age: 24, department: "HR", role: "HR Executive", salary: 35000}
// {name: "Naveen", age: 28, department: "Finance", role: "Accountant", salary: 50000}


// for...in

for(let employee of employees){
    for(let key in employee){
        console.log(key+": "+employee[key]);
    }
}

// Output:
// name: Arun
// age: 25
// department: IT
// role: Developer
// salary: 40000
// name: Priya
// age: 24
// department: HR
// role: HR Executive
// salary: 35000
// name: Naveen
// age: 28
// department: Finance
// role: Accountant
// salary: 50000


// Function With Parameters

function displayEmployee(name,age,department,role,salary){
    console.log("Name: "+name);
    console.log("Age: "+age);
    console.log("Department: "+department);
    console.log("Role: "+role);
    console.log("Salary: "+salary);
}

displayEmployee(
    employees[0].name,
    employees[0].age,
    employees[0].department,
    employees[0].role,
    employees[0].salary
);

// Output:
// Name: Arun
// Age: 25
// Department: IT
// Role: Developer
// Salary: 40000


// Return Salary

function getSalary(amount){
    return amount;
}

let returnedSalary=getSalary(employees[0].salary);

console.log("Salary: "+returnedSalary);

// Output:
// Salary: 40000


// Condition

for(let employee of employees){

    if(employee.salary>=40000){

        console.log(
            employee.name+
            " salary is greater than or equal to 40000"
        );

    }else{

        console.log(
            employee.name+
            " salary is less than 40000"
        );

    }
}

// Output:
// Arun salary is greater than or equal to 40000
// Priya salary is less than 40000
// Naveen salary is greater than or equal to 40000


// Arrow Function

let annualSalary=(monthlySalary)=>{
    return monthlySalary*12;
};

console.log(
    "Annual Salary: "+
    annualSalary(employees[0].salary)
);

// Output:
// Annual Salary: 480000


// Generator Function

function* employeeBenefits(){
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits=employeeBenefits();

for(let benefit of benefits){
    console.log(benefit);
}

// Output:
// Medical Insurance
// Transport
// Food Allowance
// Bonus

