const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    port: MYSQL_PORT,
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})

module.exports = connection