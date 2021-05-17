const fs= require('fs');
const inquirer= require('inquirer');
const router = require('./routes/apiRoutes/employee');
const db= require('./db/connection');

// HERE WE ARE ASKING THE USER TO CHOOSE ONE OF THE LIST 
const questions= () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'company',
            message: 'Choose one of the list',
            choices: [
                'View all departments',
                'View all roles',
                'View all Employees',
                'Add a department',
                'Add a role',
                'Add an Employee',
                'Update an Employee role'
            ]
        }
    ])
    .then((answer) => {
        console.log('Questions generated');
        console.log(answer.company);
        if (answer.company === 'View all Employees') {
            getEmployees();
            
        }
        else if (answer.company === 'View all roles') {
            getRoles();
        }
        else if (answer.company === 'View all departments') {
            getDepartments();
        }
        else if (answer.company === 'Add a department') {
            addDepartment();
        }
        else if (answer.company === 'Add a role') {
            addRole();
        }
        else if (answer.company === 'Add an Employee') {
            addEmployee();
        }
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log('Error 01');
        }
        else {
            console.log('Error 02');
        }
    });
}

// GET EMPLOYEE TABLE
function getEmployees() {
    sql= `SELECT employee.id, employee.first_name, employee.last_name, rolee.title, rolee.salary, manager_id AS manager_name
        FROM employee
        LEFT JOIN rolee ON employee.role_id = rolee.id
        LEFT JOIN managers ON employee.manager_id = managers.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        else {
            console.table(rows);
        }
    })
};

// GET DEPARTMENT TABLE
function getDepartments() {
    sql= `SELECT department.id AS department_id, department.name AS department_name FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        else {
            console.table(rows);
        }
    });
};

// GET ROLE TABLE
function getRoles() {
    sql= `SELECT rolee.id AS role_id, rolee.title AS job_tilte, rolee.salary AS job_salary, department.name
        AS department_name
        FROM rolee
        LEFT JOIN department
        ON rolee.department_id = department.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        else {
            console.log('Role successful');
            console.table(rows);
        }
    });
};

// ADD DATA INTO DEPARTMENT TABLE
function addDepartment() {
        inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'Enter a new department name'
        }
    ])
    .then((deptAnswer) => {
        console.log(deptAnswer.deptName);

        const sql= `INSERT INTO department SET ?`;
        params= {name: deptAnswer.deptName};

        db.query(sql, params, (err, result) => {
            if (err) {
                throw err
            }
            getDepartments();
        })
    })  
};

// ADD DATA INOT ROLE TABLE
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Enter Role Title'
        },
        {
            type: 'number',
            name: 'roleSalary',
            message: 'Enter a salary and MUST BE NUMBER'
        },
        {
            type: 'input',
            name: 'roleDept',
            message: 'Enter department role'
        }
    ])
    .then((roleAnswer) => {
        console.log(roleAnswer.roleTitle, roleAnswer.roleSalary, roleAnswer.roleDept);

        const sql= `INSERT INTO rolee SET ?`;
        params= {
            title: roleAnswer.roleTitle,
            salary: roleAnswer.roleSalary,
            department_id: roleAnswer.roleDept
        };

        db.query(sql, params, (err, result) => {
            if (err) {
                throw err
            }
            getRoles();
        });
    });
};

// ADD DATA INTO EMPLOYEE TABLE
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'empFirstName',
            message: 'Enter First name'
        },
        {
            type: 'input',
            name: 'empLastName',
            message: 'Enter Last name'
        },
        {
            type: 'number',
            name: 'empRoleId',
            message: 'Enter Role id number'
        },
        {
            type: 'number',
            name: 'empManagerId',
            message: 'Enter Manager id number'
        }
    ])
    .then((empAnswer) => {
        console.log('new employee added');
        console.log(empAnswer.empFirstName, empAnswer.empLastName, empAnswer.empRoleId, empAnswer.empManagerId);

        const sql= `INSERT INTO employee SET ?`;
        params= {
            first_name: empAnswer.empFirstName,
            last_name: empAnswer.empLastName,
            role_id: empAnswer.empRoleId,
            manager_id: empAnswer.empManagerId
        };

        db.query(sql, params, (err, result) => {
            if (err) {
                throw err
            }
            getEmployees();
        })
    });
};

questions();

module.exports= router;