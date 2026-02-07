const express = require('express');
const path = require('path');
const http = require('http');
const regRoutes = require('./registration');
const loginRoutes = require('./login');
const tokenRoutes = require('./emailactivation');
const postRoutes = require('./postMsg');

const session = require("express-session");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // for form data


app.use(session({
  secret: 'mySecretKey',   
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname ,'public/home.html'));
});
  app.get('/token',(req,res)=>{ 
  res.sendFile(path.join(__dirname ,'public','emailValidation/emailValidation.html'))
 });

 app.post("/logout", (req,res)=>{
      console.log("logout")
      req.session.userInfo=null;
       res.sendFile(path.join(__dirname, 'public' ,'home.html'));
    });
    

app.use(regRoutes);
app.use(loginRoutes);
app.use(tokenRoutes);
app.use(postRoutes);


server.listen(port, ()=>{
 console.log("Server start on port 3000")
});
