const api = "https://dummyjson.com/users";

let employees = [];
let currentDepartment = "All";


const employeeContainer =
    document.getElementById("employeeContainer");

const employeeCount =
    document.getElementById("employeeCount");

const statusMessage =
    document.getElementById("statusMessage");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const sortSelect =
    document.getElementById("sortSelect");

const employeeForm =
    document.getElementById("employeeForm");


function fetchEmployees() {

    statusMessage.textContent =
        "Loading employees...";

    fetch(api)

        .then((response) => {

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch employee data"
                );
            }

            // Convert response to JSON
            return response.json();
        })

        .then((data) => {

            // API returns users inside data.users
            employees = data.users.map((user) => {

                return {

                    id: user.id,

                    name:
                        `${user.firstName} ${user.lastName}`,

                    age: user.age,

                    email: user.email,

                    phone: user.phone,

                    image: user.image,

                    company: user.company.name,

                    department:
                        normalizeDepartment(
                            user.company.department
                        ),

                    // API users don't have salary
                    salary: 0

                };

            });


            statusMessage.textContent =
                "Employee data loaded successfully.";

            displayEmployees(employees);

        })

        .catch((error) => {

            console.error(error);

            statusMessage.textContent =
                "Unable to load employee data. Please try again.";

        })

        .finally(() => {

            console.log(
                "Employee API operation completed."
            );

        });
}


function normalizeDepartment(department) {

    const value = department.toLowerCase();


    if (
        value.includes("engineering") ||
        value.includes("technology") ||
        value.includes("development")
    ) {
        return "IT";
    }


    if (
        value.includes("human resources") ||
        value.includes("hr")
    ) {
        return "HR";
    }


    if (
        value.includes("finance") ||
        value.includes("account")
    ) {
        return "Finance";
    }


    if (
        value.includes("marketing")
    ) {
        return "Marketing";
    }


    // Other departments
    return "IT";
}


// DISPLAY EMPLOYEES

function displayEmployees(employeeList) {

    employeeContainer.innerHTML = "";


    if (employeeList.length === 0) {

        employeeContainer.innerHTML = `
            <p>No employees found.</p>
        `;

        updateEmployeeCount(0);

        return;
    }


    employeeList.forEach((employee) => {

        const card =
            document.createElement("div");

        card.classList.add("employee-card");


        card.innerHTML = `

            <img
                src="${employee.image || "https://via.placeholder.com/100"}"
                alt="${employee.name}"
            >

            <h3>${employee.name}</h3>

            <p>
                <strong>Age:</strong>
                ${employee.age}
            </p>

            <p>
                <strong>Email:</strong>
                ${employee.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${employee.phone || "Not Available"}
            </p>

            <p>
                <strong>Company:</strong>
                ${employee.company || "N/A"}
            </p>

            <p>
                <strong>Department:</strong>
                ${employee.department}
            </p>

            <p>
                <strong>Salary:</strong>
                ${
                    employee.salary > 0
                    ? formatCurrency(employee.salary)
                    : "Not Available"
                }
            </p>

            <button
                class="delete-btn"
                data-id="${employee.id}"
            >
                Delete
            </button>

        `;


        employeeContainer.appendChild(card);

    });


    updateEmployeeCount(employeeList.length);

    updateSalaryDashboard(employeeList);
}


// SEARCH EMPLOYEES

function searchEmployees() {

    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();


    let result = employees;


    // Search using filter() and includes()
    if (searchValue !== "") {

        result = result.filter((employee) => {

            return employee.name
                .toLowerCase()
                .includes(searchValue);

        });

    }


    // Apply department filter also
    if (currentDepartment !== "All") {

        result = result.filter((employee) => {

            return employee.department ===
                currentDepartment;

        });

    }


    displayEmployees(result);
}


// DEPARTMENT FILTER

function filterDepartment(department) {

    currentDepartment = department;

    searchEmployees();
}


// UPDATE EMPLOYEE COUNT

function updateEmployeeCount(count) {

    employeeCount.textContent = count;
}


// ADD EMPLOYEE

function addEmployee() {

    const name =
        document.getElementById("nameInput")
            .value.trim();

    const age =
        Number(
            document.getElementById("ageInput").value
        );

    const email =
        document.getElementById("emailInput")
            .value.trim();

    const department =
        document.getElementById("departmentInput")
            .value;

    const salary =
        Number(
            document.getElementById("salaryInput").value
        );


    // Validate
    const isValid =
        validateEmployee(
            name,
            age,
            email,
            department,
            salary
        );


    if (!isValid) {
        return;
    }


    // Create employee object
    const newEmployee = {

        id: Date.now(),

        name: name,

        age: age,

        email: email,

        phone: "Not Available",

        image:
            "https://via.placeholder.com/100",

        company: "Local Employee",

        department: department,

        salary: salary

    };


    // Add to array
    employees.push(newEmployee);


    // Display updated data
    searchEmployees();


    // Clear form
    clearForm();


    statusMessage.textContent =
        "Employee added successfully.";

}


// VALIDATION

function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    let valid = true;


    // Clear previous errors
    document.getElementById("nameError")
        .textContent = "";

    document.getElementById("ageError")
        .textContent = "";

    document.getElementById("emailError")
        .textContent = "";

    document.getElementById("departmentError")
        .textContent = "";

    document.getElementById("salaryError")
        .textContent = "";


    // Name
    if (name === "") {

        document.getElementById("nameError")
            .textContent =
            "Please enter employee name";

        valid = false;
    }


    // Age
    if (age <= 18 || isNaN(age)) {

        document.getElementById("ageError")
            .textContent =
            "Age must be greater than 18";

        valid = false;
    }


    // Email
    if (email === "") {

        document.getElementById("emailError")
            .textContent =
            "Please enter employee email";

        valid = false;
    }


    // Department
    if (department === "") {

        document.getElementById("departmentError")
            .textContent =
            "Please select department";

        valid = false;
    }


    // Salary
    if (salary <= 0 || isNaN(salary)) {

        document.getElementById("salaryError")
            .textContent =
            "Please enter valid salary";

        valid = false;
    }


    return valid;
}


// DELETE EMPLOYEE

function deleteEmployee(id) {

    employees = employees.filter((employee) => {

        return employee.id !== id;

    });


    searchEmployees();


    statusMessage.textContent =
        "Employee deleted successfully.";
}


// SALARY DASHBOARD

function updateSalaryDashboard(employeeList) {

    // reduce() - total salary
    const totalSalary =
        employeeList.reduce(
            (total, employee) => {

                return total + employee.salary;

            },
            0
        );


    // Average salary
    const employeesWithSalary =
        employeeList.filter((employee) => {

            return employee.salary > 0;

        });


    let averageSalary = 0;


    if (employeesWithSalary.length > 0) {

        averageSalary =
            totalSalary /
            employeesWithSalary.length;

    }


    document.getElementById("totalSalary")
        .textContent =
        formatCurrency(totalSalary);


    document.getElementById("averageSalary")
        .textContent =
        formatCurrency(averageSalary);


    // Highest salary
    if (employeesWithSalary.length > 0) {

        const highestPaid =
            employeesWithSalary.reduce(
                (highest, employee) => {

                    return employee.salary >
                        highest.salary
                        ? employee
                        : highest;

                }
            );


        document.getElementById("highestSalary")
            .textContent =
            `${highestPaid.name} - ${formatCurrency(highestPaid.salary)}`;

    } else {

        document.getElementById("highestSalary")
            .textContent =
            "No Salary Data";

    }
}


// SORT EMPLOYEES

function sortEmployees(sortType) {

    let sortedEmployees =
        [...employees];


    if (sortType === "nameAsc") {

        sortedEmployees.sort((a, b) => {

            return a.name.localeCompare(b.name);

        });

    }


    if (sortType === "nameDesc") {

        sortedEmployees.sort((a, b) => {

            return b.name.localeCompare(a.name);

        });

    }


    if (sortType === "ageAsc") {

        sortedEmployees.sort((a, b) => {

            return a.age - b.age;

        });

    }


    if (sortType === "ageDesc") {

        sortedEmployees.sort((a, b) => {

            return b.age - a.age;

        });

    }


    if (sortType === "salaryAsc") {

        sortedEmployees.sort((a, b) => {

            return a.salary - b.salary;

        });

    }


    if (sortType === "salaryDesc") {

        sortedEmployees.sort((a, b) => {

            return b.salary - a.salary;

        });

    }


    displayEmployees(sortedEmployees);
}


// CLEAR FORM

function clearForm() {

    employeeForm.reset();

    document.getElementById("nameError")
        .textContent = "";

    document.getElementById("ageError")
        .textContent = "";

    document.getElementById("emailError")
        .textContent = "";

    document.getElementById("departmentError")
        .textContent = "";

    document.getElementById("salaryError")
        .textContent = "";
}


// FORMAT CURRENCY

function formatCurrency(amount) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);
}


// DATE & TIME

function updateDateTime() {

    const now = new Date();


    const day =
        now.getDate();

    const month =
        now.toLocaleString(
            "en-IN",
            { month: "long" }
        );

    const year =
        now.getFullYear();


    const hours =
        now.getHours();

    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");


    let displayHours =
        hours % 12 || 12;


    const ampm =
        hours >= 12
            ? "PM"
            : "AM";


    document.getElementById("today")
        .textContent =
        `Today: ${day} ${month} ${year}`;


    document.getElementById("currentTime")
        .textContent =
        `Time: ${displayHours}:${minutes} ${ampm}`;
}


// EVENT LISTENERS

// Search button
searchBtn.addEventListener(
    "click",
    searchEmployees
);


// Search while typing
searchInput.addEventListener(
    "input",
    searchEmployees
);


// Department buttons
const departmentButtons =
    document.querySelectorAll(
        ".department-btn"
    );


departmentButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            // Remove active from all buttons
            departmentButtons.forEach((btn) => {

                btn.classList.remove("active");

            });


            // Add active to clicked button
            button.classList.add("active");


            const department =
                button.dataset.department;


            filterDepartment(department);

        }
    );

});


// Sort
sortSelect.addEventListener(
    "change",
    () => {

        sortEmployees(
            sortSelect.value
        );

    }
);


// Add employee
employeeForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        addEmployee();

    }
);


// Delete buttons
employeeContainer.addEventListener(
    "click",
    (event) => {

        if (
            event.target.classList
                .contains("delete-btn")
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );

            deleteEmployee(id);

        }

    }
);


updateDateTime();

setInterval(
    updateDateTime,
    1000
);

fetchEmployees();