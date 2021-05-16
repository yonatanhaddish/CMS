const fs= require('fs');
const inquirer= require('inquirer');
const router = require('./routes/apiRoutes/employee');
// const getEmployee= require('./routes/apiRoutes');
const db= require('./db/connection');


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
            console.log("AAA");
            getEmployees();
            
        }
        else if (answer.company === 'View all roles') {
            console.log('BBB');
            getRoles();
        }
        else if (answer.company === 'View all departments') {
            console.log('CCC');
            getDepartments();
        }
        else if (answer.company === 'Add a department') {
            console.log("Lets add a new department");
            addDepartment();
        }
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log('Error 01');
        }
        else {
            console.log('Error 02');
            // getEmployees();
        }
    });
}

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
            console.log("It was sucessful");
            console.table(rows);
            // connection.end();
        }
    })
};

function getDepartments() {
    sql= `SELECT department.id AS department_id, department.name AS department_name FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        else {
            console.log("Department successful");
            console.table(rows);
        }
    });
};

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

function addDepartment() {
        inquirer.prompt([
        {
            type: 'input',
            name: 'deptName',
            message: 'Enter a new department name'
        }
    ])
    .then((deptAnswer) => {
        console.log("new department added");
        console.log(deptAnswer.deptName);

        const sql= `INSERT INTO department SET ?`;
        params= {name: deptAnswer.deptName};

        db.query(sql, params, (err, result) => {
            if (err) {
                throw err
                console.log("Error")
            }
            console.log("added");
            getDepartments();
        })
    })
    
};

questions();

module.exports= router;