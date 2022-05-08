const mysql = require('mysql2');

const conn_pool = mysql.createPool({
    host:'localhost',
    user:'',
    password:'',
    database:'',
    
})

module.exports = conn_pool.promise();