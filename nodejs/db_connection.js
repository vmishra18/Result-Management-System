var mysql = require('mysql2')
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "teacher_student_db"
})

module.exports = con;

// let records ={};

    // con.connect(function (err) {
    // console.log("Connected!");
    // //con.query("CREATE DATABASE teacher_student_db", function (err, result) {
    //     var sql = "CREATE TABLE studentRecords (id INT AUTO_INCREMENT PRIMARY KEY, rollno int, name VARCHAR(255), dob VARCHAR(200) , score int)";
    //     con.query(sql, function (err, result) {
    //     //  if (err) throw err;
    //       console.log("Table created");
    //     });
    //     console.log("Database created");
    //   });
    // //});


    // var sql = "INSERT INTO studentRecords (rollno ,name, dob, score) VALUES ( 1, 'Ram' , 07092000, 97)";
    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });

    // con.query("SELECT * FROM studentRecords", function (err, result, fields) {
    //     if (err) throw err;
    //     records = result;
    //     console.log(result);
    //   });
// });
