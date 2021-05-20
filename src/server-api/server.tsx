// This is the routes.js file!

const express1 = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'sql471.main-hosting.eu',
  user     : 'u910171096_MarquesTech',
  password : 'p3mL3H7>?P',
  database : 'u910171096_strong_core'
});

// We're still in routes.js! Right below everything else.

// Starting our app.
const app = express1();

const router1 = require('./routes/routes')
app.use('/',router1)

// Creating a GET route that returns data from the 'users' table.
/*app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})*/

/*app.get('/user?', function(req, res){
  connection.getConnection(function(err, connection){
    connection.query('SELECT * FROM users WHERE username LIKE ', function(error, results, fields){
      if(error) throw error;
      res.send(results)
    });
  });
});*/

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});