const mysql= require('mysql2');

// Connect to database
const db= mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '071780yonihiinQ',
        database: 'companyA'
    },
    console.log('Connected to the companyA database')
);

module.exports= db;