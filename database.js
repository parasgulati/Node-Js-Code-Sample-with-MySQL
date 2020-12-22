var mysql = require('mysql')
require('dotenv/config');

var connection = mysql.createConnection({
  host: process.env.my_sql_host,
  port: process.env.my_sql_port,
  user: process.env.my_sql_user,
  password: process.env.my_sql_password,
  database: process.env.my_sql_database
})

connection.connect((err)=> {
	if(!err)
		console.log('Database successfully connected');
	else
		console.log('Database connection failed');
});
module.exports = connection;