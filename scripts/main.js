  var errorArray=[];

function submitFunction(){
  document.getElementById('Name').classList.remove("invalid");  
  document.getElementById('eMail').classList.remove("invalid");
  document.getElementById('password').classList.remove("invalid");
  document.getElementById('timeZone').classList.remove("invalid");
      document.getElementById('termsAndConditions').classList.remove("invalid");

   errorArray=[];
  document.getElementById('message').innerHTML="";
  //alert("Hello");
  var userNameValue=document.getElementById('Name').value;
  var emailAddressValue=document.getElementById('eMail').value;
  var passwordValue=document.getElementById('password').value;
  var timeZoneValue=document.getElementById('timeZone').value;
  var termsAndConditionChecked=document.getElementById('termsAndConditions').checked;
  
  var userNameFilledOut=(userNameValue==="") ? false:true ;
  var emailFilledOut=(emailAddressValue==="") ? false:true ;
  var emailValid=(emailAddressValue.indexOf("@")>0) ? true:false ;
  var passwordFilledOut=(passwordValue==="" || passwordValue.length <=3) ? false:true ;
  var timeZoneSelectedf=(timeZoneValue==="") ? false:true ;
  
  if(!userNameFilledOut){
     //alert("No User Name");
    document.getElementById('Name').classList.add("invalid");
    errorArray.push("Username is required");
     }
  if(!emailFilledOut){
     //alert("No email");
    document.getElementById('eMail').classList.add("invalid");
    errorArray.push("Email is required and must be longer than 3 characters");
     }
  
    if(!emailValid){
     //alert("email not valid");
      document.getElementById('eMail').classList.add("invalid");
      errorArray.push("Enter a valid Email");
     }
  
     if(!passwordFilledOut){
     //alert("No Proper Password Filled out");
       document.getElementById('password').classList.add("invalid");
       errorArray.push("Password is required");
     }
  
     if(!timeZoneSelectedf){
     //alert("Time zone Not selected");
       document.getElementById('timeZone').classList.add("invalid");
       errorArray.push("Time Zone  is required");
     }
  
   if(!termsAndConditionChecked){
    // alert("Need to Accept Terms and Conditions");
 document.getElementById('termsAndConditions').classList.add("invalid");
     errorArray.push("You Must Accept Terms and Conditions");
     }
  
       if(userNameFilledOut && emailFilledOut && emailValid && passwordFilledOut && timeZoneSelectedf && termsAndConditionChecked ){
        alert("Thank you for submiting the form!");
;
        }
  
  for(var i=0;i<errorArray.length;i++){document.getElementById('message').innerHTML+="<p>"+ errorArray[i] +"</p>";}


}
  
  
  
  
  


function resetFunction(){
     errorArray=[];
  
  document.getElementById('Name').classList.remove("invalid");  
  document.getElementById('eMail').classList.remove("invalid");
  document.getElementById('password').classList.remove("invalid");
  document.getElementById('timeZone').classList.remove("invalid");
      document.getElementById('termsAndConditions').classList.remove("invalid");
 // alert("World");
  
  document.getElementById('message').innerHTML="";
  
   document.getElementById('Name').value="";
 document.getElementById('eMail').value="";
 document.getElementById('password').value="";
 document.getElementById('timeZone').value="";
 document.getElementById('termsAndConditions').checked=false;
  
  
}

document.getElementById("submitButton").addEventListener("click",submitFunction);

document.getElementById("resetButton").addEventListener("click",resetFunction);


