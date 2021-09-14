var dob=document.querySelector("#input-date");
var button=document.querySelector("#submit");
var msg=document.querySelector("#message");
 function convertDate(date)
 {
    console.log(date.getMonth());
     date = date.replaceAll("-", "");
     return date;
 }
//  function reverse(str)
//  {
//      var newString="";
//      for(let i=str.length-1;i>=0;i++)
//      {
//          newString=newString+str.charAt(i);
//      }
//      return newString;
//  }
 function checkPalindrome(date){
    //  var reverse=reverse(date);
    //  console.log(reverse);
    var reverse=date.split('').reverse().join('');
    console.log(reverse);
    console.log(date);
    if(date===reverse)
    {
        showMessage(`Your birthday is a palindrome`);
    }
    else
    {
        showMessage(`Your Birthday Is not palindrome`);
    }
 }
 const showMessage = (message) => {
    msg.innerText = message;
  };
 button.addEventListener('click',function call(){
        var date=convertDate(dob.value);
        checkPalindrome(date);
 })