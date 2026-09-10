// Task 1 — Student Result Analyzer
function analyzeStudent(name, department, marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    let result;
    let grade;

    // Check if any subject is below 50
    let hasFailed = marks.some(mark => mark < 50);

    if (hasFailed) {
        result = "Fail";
        grade = "Fail";
    } else {
        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 50) {
            grade = "D";
        } else {
            grade = "Fail";
        }
    }

    console.log("----- STUDENT RESULT -----");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}


// User Input
let name = prompt("Enter student name:");
let department = prompt("Enter department:");

let marks = [];

for (let i = 1; i <= 5; i++) {
    let mark = Number(prompt(`Enter subject ${i} mark:`));
    marks.push(mark);
}

analyzeStudent(name, department, marks);

//Task 2 — Employee Salary Calculator
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("----- EMPLOYEE SALARY -----");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Experience:", employee.experience, "Years");
    console.log("Basic Salary: ₹" + basicSalary);
    console.log("Bonus: ₹" + bonus);
    console.log("Final Salary: ₹" + finalSalary);
}

calculateSalary(employee);

//Task 3 — Product Filter System
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


// 1. Products above ₹2,000
let above2000 = products.filter(product => product.price > 2000);

console.log("Products above ₹2000:");
console.log(above2000);


// 2. Only electronics
let electronics = products.filter(
    product => product.category === "electronics"
);

console.log("Electronics:");
console.log(electronics);


// 3. First product below ₹1,000
let below1000 = products.find(
    product => product.price < 1000
);

console.log("First product below ₹1000:");
console.log(below1000);


// 4. Total price
let totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Price: ₹" + totalPrice);


// 5. Any product above ₹50,000
let above50000 = products.some(
    product => product.price > 50000
);

console.log("Any product above ₹50000:", above50000);


// 6. Every product above ₹500
let allAbove500 = products.every(
    product => product.price > 500
);

console.log("Every product above ₹500:", allAbove500);

// Task 4 — Employee Management
let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 45000
    },
    {
        id: 104,
        name: "Karthi",
        role: "Full Stack Developer",
        salary: 70000
    },
    {
        id: 105,
        name: "Dinesh",
        role: "Tester",
        salary: 35000
    },
    {
        id: 106,
        name: "Meena",
        role: "Project Manager",
        salary: 80000
    }
];


// 1. Display all employee names
let employeeNames = employees.map(employee => employee.name);

console.log("Employee Names:");
console.log(employeeNames);


// 2. Employees earning above ₹40,000
let highSalaryEmployees = employees.filter(
    employee => employee.salary > 40000
);

console.log("Employees earning above ₹40000:");
console.log(highSalaryEmployees);


// 3. Find employee ID 103
let employee103 = employees.find(
    employee => employee.id === 103
);

console.log("Employee ID 103:");
console.log(employee103);


// 4. Total salary
let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary: ₹" + totalSalary);


// 5. Highest-paid employee
let highestPaid = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
);

console.log("Highest Paid Employee:");
console.log(highestPaid);


// 6. Sort highest to lowest
let sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Employees High to Low:");
console.log(sortedEmployees);


// 7. New array with only names
let namesOnly = employees.map(
    employee => employee.name
);

console.log("Names Only:");
console.log(namesOnly);

//Task 5 — Shopping Cart

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];


function calculateCart(cart) {

    // Item totals
    let items = cart.map(item => {
        return {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            itemTotal: item.price * item.quantity
        };
    });

    console.log("----- CART ITEMS -----");

    items.forEach(item => {
        console.log(
            item.name +
            " = ₹" + item.price +
            " × " + item.quantity +
            " = ₹" + item.itemTotal
        );
    });


    // Total Cart Value
    let total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );


    // Discount
    let discount = 0;

    if (total > 50000) {
        discount = total * 10 / 100;
    }


    // Final Amount
    let finalAmount = total - discount;


    console.log("Total Cart Value: ₹" + total);
    console.log("Discount: ₹" + discount);
    console.log("Final Payable Amount: ₹" + finalAmount);
}


calculateCart(cart);

//Task 6 — Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


// 1. All student names
let studentNames = students.map(
    student => student.name
);

console.log("Student Names:");
console.log(studentNames);


// 2. Students above 80
let above80 = students.filter(
    student => student.mark > 80
);

console.log("Students Above 80:");
console.log(above80);


// 3. Find Priya
let priya = students.find(
    student => student.name === "Priya"
);

console.log("Priya:");
console.log(priya);


// 4. Average mark
let totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


// 5. Check anyone failed
let anyoneFailed = students.some(
    student => student.mark < 50
);

console.log("Anyone Failed:", anyoneFailed);


// 6. Everyone above 40
let everyoneAbove40 = students.every(
    student => student.mark > 40
);

console.log("Everyone Above 40:", everyoneAbove40);


// 7. Sort by marks
let sortedStudents = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("Students Sorted by Marks:");
console.log(sortedStudents);

// Task 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Numbers × 2
let doubled = numbers.map(
    number => number * 2
);

console.log("Doubled:");
console.log(doubled);


// 2. Even numbers
let evenNumbers = numbers.filter(
    number => number % 2 === 0
);

console.log("Even Numbers:");
console.log(evenNumbers);


// 3. Numbers greater than 15
let greaterThan15 = numbers.filter(
    number => number > 15
);

console.log("Numbers > 15:");
console.log(greaterThan15);


// 4. First number greater than 20
let firstGreater20 = numbers.find(
    number => number > 20
);

console.log("First Number > 20:");
console.log(firstGreater20);


// 5. Total
let total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log("Total:", total);


// 6. Any number greater than 40
let greaterThan40 = numbers.some(
    number => number > 40
);

console.log("Any > 40:", greaterThan40);


// 7. Every number positive
let allPositive = numbers.every(
    number => number > 0
);

console.log("All Positive:", allPositive);


// 8. Highest to lowest
let descending = [...numbers].sort(
    (a, b) => b - a
);

console.log("Highest to Lowest:");
console.log(descending);

// Task 8 — String Analyzer

let sentence = prompt("Enter a sentence:");


// 1. Total characters
console.log("Total Characters:");
console.log(sentence.length);


// 2. Uppercase
console.log("Uppercase:");
console.log(sentence.toUpperCase());


// 3. Lowercase
console.log("Lowercase:");
console.log(sentence.toLowerCase());


// 4. Contains JavaScript
console.log("Contains JavaScript:");
console.log(sentence.includes("JavaScript"));


// 5. First character
console.log("First Character:");
console.log(sentence[0]);


// 6. Last character
console.log("Last Character:");
console.log(sentence[sentence.length - 1]);


// 7. Number of words
let words = sentence.trim().split(/\s+/);

console.log("Number of Words:");
console.log(words.length);


// 8. Replace JavaScript with Python
console.log("Replace JavaScript:");
console.log(
    sentence.replace("JavaScript", "Python")
);


// 9. Convert into array
console.log("Sentence Array:");
console.log(sentence.split(" "));



// Final Mini Project — Employee Dashboard

let employees1 = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. DISPLAY ALL EMPLOYEES

function displayEmployees() {
    console.log("----- ALL EMPLOYEES -----");

    employees1.forEach(employee => {
        console.log(employee);
    });
}

displayEmployees();


// 2. SEARCH EMPLOYEE BY NAME

function searchEmployee(name) {

    let employee = employees1.find(
        employee =>
            employee.name.toLowerCase() === name.toLowerCase()
    );

    if (employee) {
        console.log("Employee Found:");
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}

searchEmployee("Priya");


// 3. FILTER BY DEPARTMENT

function filterByDepartment(department) {

    let result = employees1.filter(
        employee =>
            employee.department.toLowerCase() ===
            department.toLowerCase()
    );

    console.log("Department:", department);
    console.log(result);
}

filterByDepartment("IT");


// 4. SALARY ABOVE ₹50,000

let highSalaryEmployees1 = employees1.filter(
    employee => employee.salary > 50000
);

console.log("----- SALARY ABOVE ₹50000 -----");
console.log(highSalaryEmployees1);


// 5. TOTAL COMPANY SALARY

let totalSalary1 = employees1.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("----- TOTAL SALARY -----");
console.log("₹" + totalSalary1);


// 6. HIGHEST PAID EMPLOYEE

let highestPaidEmployee = employees1.reduce(
    (highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
);

console.log("----- HIGHEST PAID EMPLOYEE -----");
console.log(highestPaidEmployee);


// 7. EXPERIENCE ABOVE 3 YEARS

let experiencedEmployees = employees1.filter(
    employee => employee.experience > 3
);

console.log("----- EXPERIENCE ABOVE 3 YEARS -----");
console.log(experiencedEmployees);


// 8. SORT SALARY LOW TO HIGH

let lowToHigh = [...employees1].sort(
    (a, b) => a.salary - b.salary
);

console.log("----- SALARY LOW TO HIGH -----");
console.log(lowToHigh);


// SORT SALARY HIGH TO LOW

let highToLow = [...employees1].sort(
    (a, b) => b.salary - a.salary
);

console.log("----- SALARY HIGH TO LOW -----");
console.log(highToLow);


// 9. EMPLOYEE STATISTICS

function employeeStatistics() {

    let totalEmployees = employees1.length;

    let totalSalary = employees1.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    let highestSalary = employees1.reduce(
        (highest, employee) =>
            employee.salary > highest.salary
                ? employee
                : highest
    );

    let averageSalary = totalSalary / totalEmployees;


    console.log("----- EMPLOYEE STATISTICS -----");

    console.log(
        "Total Employees:",
        totalEmployees
    );

    console.log(
        "Total Salary: ₹" + totalSalary
    );

    console.log(
        "Highest Salary: ₹" +
        highestSalary.salary
    );

    console.log(
        "Average Salary: ₹" +
        averageSalary.toFixed(2)
    );
}

employeeStatistics();

// Total Employees: 3

// Total Salary: ₹160000

// Highest Salary: ₹65000

// Average Salary: ₹53333.33