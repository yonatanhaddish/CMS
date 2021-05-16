const express= require('express');
const router= express.Router();
const db= require('../../db/connection');
const cTable= require('console.table');

// function getDepartments() {
//     sql= `SELECT * FROM department`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             throw err
//         }
//         else {
//             console.log("Department successful");
//             console.table(rows);
//         }
//     });
// };

// function addDepartment() {
//     sql= `INSERT INTO department SET`
//     params= {name: answer.company}

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             throw err
//         }
//         console.log("ADDDDDD")
//     })
// }


module.exports= router;