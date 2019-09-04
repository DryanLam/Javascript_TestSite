//import CryptoJS from 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js';

var FAILED_TIMES = 3;

function redirectUrl(){
	window.location.replace("signin.html");
}

function hashAuth(){
	var oAuth_2 = document.getElementById("password").value;
	var hash = CryptoJS.MD5(oAuth_2).toString().toUpperCase();
	document.getElementById("password").value = hash;
}

function oAuth(){
	hashAuth();
	var elements = document.getElementById("loginForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
       var item = elements.item(i);
       obj[item.name] = item.value;
    }

    sessionStorage.oAuthSession = obj.username;
    // sessionStorage.setItem("oAuthSession",JSON.stringify(obj.username));
    // var passhash = CryptoJS.MD5("admin").toString().toUpperCase();

	console.log(sessionStorage.oAuthSession);

	if ( obj.username == "admin" && obj.password == "21232F297A57A5A743894A0E4A801FC3"){
		alert ("Login successfully");
		redirectUrl();
	}else{
		FAILED_TIMES--;
		alert("You have left " + FAILED_TIMES + " attempt;");
		if( FAILED_TIMES == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			alert("Please reset browser!");
			FAILED_TIMES = 3;
		}
	}
}
