const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#confirm-password");
const form = document.querySelector("#form");
form.addEventListener('submit',(e)=>{
    if (ValidateInput()){
        e.preventDefault();
    }
})
function validateInput(){
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true;
    if(usernameval===""){
        success = false;
        setmsg(username,"Username is required");
    }
    else{
        setsuccess(username)
    }/
if(em
     ailval===""){
 []       success = false;
        setmsg (email,"Email is required");
    }
    else if (!validateemail(emailval)){
         success= false;
         setmsg(email,"please enter a valid Email address");
    }
    else{
        setsuccess(email)
    }
    if(passwordval===""){
        success = false;
        setmsg(password,"Password is required");
    }
    else if(passwordval.length<8){
        success = false;
        setmsg(password,"Password must be atleaste 8 characters");
    }
    else if(!validdatepassword(password)){
        success = false;
        setmsg(password,"1 UpperCase, 1 LowerCase, 1 digit, 1 symbol");
    }
    if(cpasswordval===""){
        success = false;
        setmsg(cpassword,"Confirm password is required");
    }
    else if(cpasswordval !==passwordval){
        success = false;
        setmsg(cpassword,"Password dose not match");
    }
    else{
        setsuccess(cpassword);
    }
}
function setmag(element,message){
    const inputgroup = element.parentElement;
    const msgElement = inputgroup.querySelector('.msg')
    
[]



''
''
'''
    '''
    msgElement.innerText = message;
    inputgroup.classList.add('msg');
    inputgroup.classList.add('success');
}
function setsuccess(element){
const inputgroup = element.parentElement;
const msgElement = inputgroup.querySelector('.msg')

msgElement.innerText = '';
inputgroup.classList.add('success')
}
const valideemail = (email)=>{
    return String(email).toLowerCase.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
const validatepassword = (password) =>{
    return String(password).match()
}