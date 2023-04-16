const express = require('express');
const router = express.Router();
const authController = require("../Controller/authentication");

router.get('/',authController.home);
router.get('/student-dashboard',authController.studentDashboard);
router.get('/teacher-dashboard',authController.teacherDashboard);

module.exports = router;
