const router = require('express').Router();
const {signUp, verifyOtp}= require('../Controllers/userController');

router.route('/signup')
    .post(signUp);

// router.post('/signUp',async (req,res)=>{
//     const user = await User.findOne({
//         number: req.body.number
//     });
//     if(user) return res.status(400).send("User already registered");
//     const OTP = otpGenerator.generate(6,{
//         digits: true, alphabets: false, upperCase: false, specialChars: false
//     });
//     const number = req.body.number;
//     console.log(OTP);
//     const otp = new Otp({number: number, otp: OTP});
//     const salt = await bcrypt.genSalt(10);
//     otp.otp = await bcrypt.hash(otp.otp, salt);
//     const result = await otp.save();
//     return res.status(200).send("Otp send successfully");
// })

router.route('/signup/verify')
    .post(verifyOtp);

module.exports = router;