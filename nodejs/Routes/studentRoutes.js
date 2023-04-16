const express = require("express")
const router = express.Router()
const studentController = require('../Controller/studentcontroller');

router.post('/student', studentController.findResult);
router.get("/studentForm", studentController.form);
router.post('/add/student', studentController.addStudent)
router.get("/editstudent/:id", studentController.editStudent);
router.get("/deletestudent/:id", studentController.deleteStudent);
router.post("/editstudent/updatestudent/:id", studentController.updateStudent);


module.exports = router;