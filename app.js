var dob=document.querySelector("#input-date");
var button=document.querySelector("#submit");
var msg=document.querySelector("#message");
function convertDatetoFormat(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);//this is converting to a standard format
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
  }
 function convertDate(date)
 {
     date=convertDatetoFormat(date);
     //console.log("dob after formatting "+date);
     date = date.replaceAll("-", "");
     var resultDate=date;
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
    console.log("Reversed date ",reverse);
    console.log("date after formatting and removing "+date);
    if(date===reverse)
    {
        showMessage(`Your birthday ${resultDate} is a palindrome`);
    }
    else
    {
        showMessage(`Your Birthday ${resultDate} Is not palindrome`);
    }
 }
 const showMessage = (message) => {
    msg.innerText = message;
  };
 button.addEventListener('click',function call(){
    //console.log("DOB----"+dob.value);    
    var date=convertDate(dob.value);
        
        checkPalindrome(date);
 })