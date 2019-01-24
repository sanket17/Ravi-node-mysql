const mysql = require('mysql2');

var connection = mysql.createPool({
    hostname     : '127.0.0.1:82',
    user     : 'root',
    password : '',
    database : 'experizer',
  });

module.exports = connection;