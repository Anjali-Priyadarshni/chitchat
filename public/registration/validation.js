
 function validateregform(){
   const name = document.getElementById("name");
   const doc = document.getElementById('errorMsg0');
   //console.log(name.value.trim().length);
   if(name.value.trim().length>0){
    doc.innerText = "";
   }
   else {
      doc.innerText = "please Enter full name";
      return false;
   }

   const email = document.getElementById("email");
   const doc1 = document.getElementById("errorMsg1");
   if(email.value.trim().length>0){
      const emailPattern = /^[a-z0-9.]{4,40}@[a-z]{2,8}\.[a-z]{2,5}$/;
     if(emailPattern.test(email.value.trim())) {
         console.log(emailPattern.test(email.value.trim()));
       doc1.innerText = "";
     }
     else {
       doc1.innerText = "Please Enter valid Email";
       return false;
     }
   }
   else {
      doc1.innerText = "please Enter your email";
      return false;
   }

   const phone = document.getElementById("phone");
   const doc2 = document.getElementById("errorMsg2");
   if(phone.value.trim().length>0){
    doc2.innerText = "";
   }
   else {
      doc2.innerText = "please Enter your phone ";
      return false;
   }

   const password = document.getElementById("password");
   const doc3 = document.getElementById("errorMsg3");
   if(password.value.trim().length>0){
      const passwordRegx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{4,9}$/;
        if(passwordRegx.test(password.value.trim())){
         console.log(passwordRegx.test(password.value.trim()));
           doc3.innerText = "";
        }
        else {
         doc3.innerText = "Please Enter Valid Password";
         return false;
        }
      }
   else {
      doc3.innerText = "please Enter your password ";
      return false;
      
   }
   return true;

   
  

  } 

  