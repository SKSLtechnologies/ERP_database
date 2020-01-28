const express = require('express');
const app = express();

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'host',
  user: 'root',
  password: 'pass',
  port: '3306'
});

con.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log("Connected!");
});

app.get('/', function(req, res){
	/*-- we send "Hello World" to the client accessing that route. 
	send is a functin on the response object--*/
	res.send('Hello World');
});
app.listen(3000, function(){
	console.log('listening to port 3000');
});
