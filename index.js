// Author: Dr. P. Rambabu
// npm install express
var express = require('express');
var app = express();

// set port, listen for requests
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//http://localhost:8080
app.get('/', function (req, res) {
       res.send('<h1>2011CS010262</h1>');
})
    
// Connect MySQL Database
// npm install mysql - MySQL Database client for nodes
var mysql = require('mysql');

// Create Connection to MySQL
var connection = mysql.createConnection({
  host:'bhargava-11.chupi0ijatux.ap-south-1.rds.amazonaws.com',
  user:'bhargava262',
  password:'mysql123',
  database:'cse'
});

//GET Method - Student Data: http://localhost:8080/GetStudents
app.get("/GetStudents", function(req , res){

  connection.query("SELECT * FROM cse.students", function (err, data) {
      res.send(data);
  });

});

