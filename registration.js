const express = require('express');
const dbQuery = require('./utils/dbQuery');
const crypto = require('crypto');
const sendEmail = require('./utils/sendmail');
const {CHECK_USER_BY_EMAIL_SQL ,INSERT_USER_SQL } = require('./utils/const');


const router = express.Router();

router.post('/registration' , async(req,res)=>{
 const { name, email, phone, password } = req.body;  
 //console.log(name);
 if (!name || !email || !password) {
    return res.send("All required fields must be filled");
  }
  
   const emailExists = await dbQuery(CHECK_USER_BY_EMAIL_SQL, [email]);
    if (emailExists.length > 0) {
      return res.redirect('/registration/registration.html?error=Your email already exists, please select another');
    }
    const token =  crypto.randomBytes(32).toString('hex');
    //console.log(token);
    await dbQuery(INSERT_USER_SQL, [name,email,phone,password,1,new Date(),token,"user"]); 
    sendEmail(email,name,token);
    return res.send("✅ Data saved successfully");//redirect to home page with msg your token is successfully login on mail
   
// res.send("Registration route executed successfully!")
});
 module.exports = router;

   