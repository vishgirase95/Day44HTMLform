
const position=document.querySelector('#salary');
const position2=document.querySelector('.salayoutput');

position2.textContent=position.value;

position.addEventListener('input',function(){
position2.textContent=position.value;

});

let inputName=document.querySelector('.name');
let ErrorMsg=document.querySelector('.nameErr');
inputName.oninput= function(){
   let CorrectName= RegExp("^[A-Z]{1}[a-z]{2,}$");
   if(CorrectName.test(inputName.value)){
    ErrorMsg.textContent="";
       
   }
   else
    ErrorMsg.innerHTML="Please Fill in Azzz format";
};
function alt(){
    alert("thank you");
}


let UserNumber=document.querySelector('#number');

let ErrNumber=document.querySelector('.ErrNumber');
UserNumber.oninput= function(){
let corretNumber=RegExp("^[0-9]{10}$");
if(corretNumber.test(UserNumber.value)){
    ErrNumber.innerHTML="";
}else{
    ErrNumber.innerHTML="Please enter correct number";

}}

let UserEmail=document.querySelector('#Email');
let ErrEmail=document.querySelector('.ErrEmail');
UserEmail.oninput= function(){
    let CorrectEmail=RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    if(CorrectEmail.test(UserEmail.value)){
        ErrEmail.innerHTML="";
    }else{
        ErrEmail.innerHTML="enter correct email";

    }
}


let UserPwd=document.querySelector('#Pwd');
let ErrPwd=document.querySelector('.ErrPwd');
UserPwd.oninput= function(){
    let CorrectPwd=RegExp("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$");
    if(CorrectPwd.test(UserPwd.value)){
        ErrPwd.innerHTML="";
    }else{
    ErrPwd.innerHTML="enter correct pasword";

    }
}