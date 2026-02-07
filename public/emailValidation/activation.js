 
 document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready");
  const params = new URLSearchParams(window.location.search);
  
const token = params.get("token");
const email = params.get("email");
const errorMsg = params.get("error");

  const emailId = document.getElementById("email");
   //console.log(email)
   emailId.value = email;
   //console.log(email.value);
   const tokenId = document.getElementById("token");
   tokenId.value = token;
   const error = document.getElementById("error");
   error.innerText = errorMsg ;
 
});

   