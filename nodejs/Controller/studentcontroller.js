const express = require('express');
const connection = require('../db_connection');

exports.addStudent = (req, res) => {
    const { rollno, name, dob, score } = req.body;
    let id = Math.floor(Math.random() * 100);
    console.log("id", id);
    if (rollno == '' || name == '' || dob == '' || score == '') {
        res.render('add-student', { alert: "please fill out all required fields" });
    }
    connection.connect((err) => {
        if (err) throw err;
        var insertQuery = "INSERT INTO studentrecords SET id =?, rollno=?, name =?, dob =?, score=?";
        connection.query(insertQuery, [id, rollno, name, dob, score], (err, result) => {
            if (!err) {
                res.render('add-student', { alert: "New Student added successfully." });
            }
            else {
                res.render('add-student', { alert: "New Student added successfully." + err })
            }
        })
    })
}

exports.form = (req, res) => {
    res.render('add-student', { alert: null });
}



// exports.editStudent = (res, req) => {
//     console.log("p",req.params);

//     // connection.connect((err) => {
//     //     if (err) throw err;

//     //     connection.query('select * from studentrecords where id =?', [req.params.id], (err, result) => {
//     //         console.log("ROW", result)
//     //         if (!err) {
//     //             res.render('edit-student', { data: result, alert: null });
//     //         }
//     //         else {
//     //             console.log(err);
//     //         }

//     //     })
//     // })
// }


exports.deleteStudent = (req, res) => {
    console.log("delete" , req.params);
    connection.connect((err) => {
        if (err) throw err;

        connection.query('Delete from studentrecords where Id =?', [req.params.id], (err, row) => {


            console.log("ROW", row)

            if (!err) {
                res.redirect('/teacher-dashboard')
            }
            else {
                console.log(err);
            }

        })
    })

}

exports.editStudent = (req, res) => {
   connection.connect((err) => {
        if (err) throw err;

        connection.query('select * from studentrecords where id =?', [req.params.id], (err, result) => {
            console.log("ROW", result)
            if (!err) {
                res.render('edit-student', { data: result, alert: null });
            }
            else {
                console.log(err);
            }

        })
    })

}


exports.updateStudent = (req, res) => {

    console.log("Update",req.params.id)
    const {rollno, name, dob, score } = req.body;
    let id = Math.floor(Math.random() * 100)
    //console.log("id", id);

    connection.connect((err) => {
        if (err) throw err;

        var insertQuery = "UPDATE studentrecords SET rollno=?, name =?, dob =?, score=? where id = ? ";
        connection.query(insertQuery, [rollno, name, dob, score, req.params.id], (err, result) => {
            if (!err) {

                connection.query('select * from studentrecords where id =?', [req.params.id], (err, row) => {
                    if (!err) {
                        res.render('teacher-dashboard', { data: row, alert: "Student updated successfully" });
                    }
                    else {
                        console.log(err);
                    }
                })
            }
            else {
                connection.query('select * from studentrecords where id =?', [req.params.id], (err, row) => {
                    if (!err) {
                        res.render('edit-student', { data: row, alert: "Unable to update student information" });
                    }
                    else {
                        console.log(err);
                    }
                })
            }
        })
    })


}

exports.findResult = (req, res) => {
    const { rollno, name } = req.body;
    let sql = "SELECT * FROM studentrecords";
    let query = connection.query(sql, (err, rows) => {
        if (err) throw err;
        var isVarified = false;
        var verifiedStudent = null;
        for (i = 0; i < rows.length; i++) {
            var student = rows[i];
            if (student["name"] == name && student["rollno"] == rollno) {
                isVarified = true;
                verifiedStudent = student;
                break;
            }
        }

        if (isVarified == true) {
            res.render("showResult", { student: verifiedStudent })
        }
        else {
            res.render('student-dashboard', { alert: "Please check you credentials and try again!" });
        }
    });
}
