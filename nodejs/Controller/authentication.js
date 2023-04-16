const con = require('../db_connection');

exports.home = (req, res) => {
    res.render('home');
}

exports.studentDashboard = (req, res) => {
    res.render('student-dashboard', { alert: null });
}

exports.teacherDashboard = (req, res) => {
    let sql = "SELECT * FROM studentrecords";
    let query = con.query(sql, (err, result) => {
        if (err) throw err;
        res.render('teacher-dashboard', { data: result });
    })
}


