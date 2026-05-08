require('dotenv').config();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    ssl: {
        rejectUnauthorized: false
    }
});

db.connect((err) => {

    if(err){
        console.log(err);
    }else{
        console.log("Database Connected ✅");
    }
});

const sql = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
)
`;

db.query(sql, (err, result) => {

    if(err){
        console.log(err);
    }else{
        console.log("Users Table Created ✅");
    }

    db.end();
});