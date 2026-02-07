const express = require('express');
const router = express.Router();
const dbQuery = require('./utils/dbQuery');
const {CHECK_USER_BY_EMAIL_SQL,SET_ACTIVE} = require('./utils/const')
router.post('/token', async (req,res)=>{
    const clientData = req.body;
    //console.log(clientData);
    const dbData = await dbQuery(CHECK_USER_BY_EMAIL_SQL , [clientData.email])
    //console.log(dbData);
    if(clientData.token == dbData[0].token && dbData[0].active==1){
        const activate = await dbQuery(SET_ACTIVE,[clientData.email]);
        //console.log(activate);
        res.redirect("login/login.html?msg=your Account is activated");
    }
    else {
        return res.redirect('/token?error= Your email and token is invalid');
    }
});

module.exports = router;