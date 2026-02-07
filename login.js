const express = require('express');
const dbQuery = require('./utils/dbQuery');
const getPost = require('./postMsg');
const {CHECK_USER_BY_EMAIL_SQL,POST_DATA,GET_DATA_SQL} = require('./utils/const')


const router = express.Router();
//express.urlencoded({ extended: true });


router.post('/login', async (req,res)=>{
    const clientData= req.body;
    //console.log(clientData);
    if(!clientData){
        return "please provide email and password"
      }
      const dbData = await dbQuery(CHECK_USER_BY_EMAIL_SQL,[clientData.email]);
      //console.log(dbData); 
      if(dbData.length==0){
        res.redirect("/login/login.html?msg1=Sorry! This Email is not Registered first you registered")
      }
    else if(dbData[0].active !== 0){
        return res.redirect('/token?error= You are not activated First you activate your account')
      }
      else if (clientData.email !== null && clientData.password == dbData[0].password){
       const username = dbData[0].name;
       const userid = dbData[0].user_id;
       const role = dbData[0].role;
       const date = dbData[0].created_time
        req.session.userInfo ={
          username : username,
          userid : userid,
          role:role,

        };
        if(role =='user'){
          const post = await dbQuery(POST_DATA,[userid]);
          //console.log(post[0].post);
          const usermsg = {
          username : username,
          userid : userid,
          posts:post
          }
            res.render("userdashboard",usermsg);
        }
        else {
          const getdbData = await dbQuery(GET_DATA_SQL);
            console.log(getdbData[1]);
            const userdata = {
            username:username,
            userid:userid,
            userInfo:getdbData

          }
          res.render("adminDashboard",userdata);
        }

        
      }
      
});


module.exports = router;