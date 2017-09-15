
var mysql     =    require('mysql');


//connect to database

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: 'qlsv'

});


con.connect(function (err) {
    if(err) throw  err;
    console.log("connected!");
});

module.exports = con;