const mysql = require('mysql2/promise')
require('dotenv').config()

const PORT = process.env.MYSQL_PORT
const HOST = process.env.MYSQL_HOST
const USER = process.env.MYSQL_USER
const PASS = process.env.MYSQL_PASSWORD
const DB = process.env.MYSQL_DB
/** 
    console.log(PORT)
    console.log(HOST)
    console.log(USER)
    console.log(PASS)
    console.log(DB)
*/
const connection = mysql.createPool({
    // port: MYSQL_PORT,
    host: HOST,
    //port: PORT,
    user: USER,
    password: PASS,
    database: DB
})
/** 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})
*/
module.exports = connection