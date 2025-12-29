var namee = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var age = document.getElementById("age")
var contact = document.getElementById("contact")
var cnic = document.getElementById("cnic")
var btn = document.getElementById("btn")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")
var ageError = document.getElementById("ageError")
var contactError = document.getElementById("contactError")
var cnicError = document.getElementById("cnicError")


    btn.addEventListener("click", function submit (event){
        event.preventDefault();
    
    var hasError1 = false;
    if(namee.value==""){
        nameError.innerText = "Enter Your Name"
        hasError1=true
    }

    else if(namee.value.length<5){
        nameError.innerText = "Name Length is too short"
        hasError1 = true
    }
    
    else{
        nameError.innerText = ""
        hasError1 = false;
    }

    var hasError2 = false;
    if(email.value==""){
        emailError.innerText = "Enter your email"
        hasError2 = true
    }
    else if(!email.value.includes("@") || !email.value.includes(".com")){
        emailError.innerText = "Enter valid email"
        hasError2 = true
    }
    else{
        emailError.innerText = ""
        hasError2 = false
    }

    var hasError3 = false 
    if(password.value == ""){
        passwordError.innerText = "Enter Password"
        hasError3 = true
    }
    else if(password.value.length<8){
        passwordError.innerText = "Password must be greater than 8 "
        hasError3 = true

    }
    else {
        passwordError.innerText = ""
        hasError3 = false

    }

    var hasError4 = false
    if(age.value == 0){
        ageError.innerText = "Enter Your age"
        hasError4 = true
    }

    else if(age.value<18){
        ageError.innerText = "You're not eligible"
        hasError4 = true

    }

    else {
        ageError.innerText = ""
        hasError4 = false

    }

    var hasError5 = false;
    if(contact.value == ""){
        contactError.innerText = "Enter your number"
        hasError5 = true

    }

    else if(contact.value.length<11 || contact.value.length>11){
        contactError.innerText = "Enter valid number"
        hasError5 = true

    }

    else{
        contactError.innerText = ""
        hasError5 = false
    }

    if(hasError1 ==true || hasError2 == true || hasError3==true || hasError4==true || hasError5==true) {
        cnicError.innerText = "Please fill the form correctly"
    }
    else if(hasError1 ==false && hasError2 == false && hasError3==false && hasError4==false && hasError5==false){
        var CNIC = (Math.random()*10000000000000).toFixed(0);   
        cnicError.innerText = ""
    }

    newCNIC = CNIC.toString().substring(0,4)+"-"+CNIC.toString().substring(4,12)+"-"
    +CNIC.toString().substring(12,14);
    cnic.value = newCNIC;
});

