function valideteLogin(){
   const email = document.getElementById("email");
   const msg2 = document.getElementById("message2");
   if(email.value.trim().length>0){
      const emailPattern = /^[a-z0-9.]{4,40}@[a-z]{2,8}\.[a-z]{2,5}$/;
     if(emailPattern.test(email.value.trim())) {
         console.log(emailPattern.test(email.value.trim()));
         msg2.innerText = "";
     }
     else {
       msg2.innerText = "Please Enter valid Email";
       return false;
     }
   }else{
    msg2.innerText = "Please Enter  Email";
       return false;
   }

   const password = document.getElementById("password");
   const msg3 = document.getElementById("message3");
   if(password.value.trim().length>0){
      const passwordRegx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{4,9}$/;
        if(passwordRegx.test(password.value.trim())){
         console.log(passwordRegx.test(password.value.trim()));
           msg3.innerText = "";
        }
        else {
         msg3.innerText = "Please Enter Valid Password";
         return false;
        }
      }else{
        msg3.innerText = "Please Enter  Password";
         return false;
      }

      return true;
}