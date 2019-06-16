
// Trial
// https://www.formget.com/javascript-login-form/
// https://stackoverflow.com/questions/23134756/simple-javascript-login-form-validation
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

//-----------
// https://stackoverflow.com/questions/29986657/persist-variables-between-page-loads
//set
localStorage.setItem('myObject', JSON.stringify(myObject));

//get
var myObject = JSON.parse(localStorage.getItem('myObject'));

//----------
$('input[type="submit"][value="Search"]').click(function() {
    sessionStorage.setItem('clicked', 'true');
});



// Then when you load the page, you can check if it's set using this:
var clicked = sessionStorage.getItem('clicked');
sessionStorage.removeItem('clicked');