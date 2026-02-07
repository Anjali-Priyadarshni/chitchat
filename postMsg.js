const express = require('express')
const dbQuery = require('./utils/dbQuery');
const {INSERT_POST,POST_DATA} = require('./utils/const');

const router = express.Router();

router.post("/post" , async (req,res)=>{
    console.log(req.body)
    const postData = req.body.msg;
    const userid = req.session.userInfo.userid;
    const username = req.session.userInfo.username;
    const savePost = await dbQuery(INSERT_POST , [userid,postData,new Date()]);
    console.log(savePost);
     const post = await dbQuery(POST_DATA,[userid]);
          //console.log(post[0].post);
          const usermsg = {
          username : username,
          userid : userid,
          posts:post
          }
            res.render("userdashboard",usermsg);
})


module.exports = router;