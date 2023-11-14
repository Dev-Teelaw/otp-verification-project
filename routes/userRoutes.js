const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddle = require('../middlewares/authMiddle');

//Handlers from controllers
// const otpController = require("../controllers/otpController");
// const authController = require("../controllers/authController")
// const {auth, isStudent, isAdmin} = require('../middlewares/authMiddle')

// router.post('/login', login)
// router.post('/signup', signup)


router.post('/signup', userController.signup)
router.post('/sendotp',userController.sendOTP)




// / routes/otpRoutes.js

router.post('/send-otp', userController.sendOTP);
// routes/authRoutes.js
router.post('/signup', userController.signup);












// router.post('/sendotp', ()=>{
//     console.log("welcome here")
// })


// //testing protected route
// router.get("/test",auth, (req,res)=>{
//     res.json({
//         success: true,
//         message: "You are a valid Tester 👨‍💻"
//     })
// })
// //protected routes
// router.get('/student', auth, isStudent, (req,res)=>{
//     res.json({
//         success: true,
//         message: "You are a valid Student 🧑‍🎓"
//     })
// })

// router.get('/admin', auth, isAdmin, (req,res)=>{
//     res.json({
//         success: true,
//         message: "You are a valid Admin 😎"
//     })
// })

module.exports = router