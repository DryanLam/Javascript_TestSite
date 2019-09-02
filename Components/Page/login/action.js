var FAILED_TIMES = 3;

function redirectUrl(){
	window.location = ("../welcome/welcome.html");
}

function hashAuth(){
	var oAuth_2 = document.getElementById("password").value;
	var hash = CryptoJS.MD5(oAuth_2).toString().toUpperCase();
	document.getElementById("password").value = hash;
}

function oAuthRC(){
	hashAuth();
	var elements = document.getElementById("oLoginForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
       var item = elements.item(i);
       obj[item.name] = item.value;
    }
	
	// Storage session user name
    sessionStorage.oAuthSession = obj.username;
	
	if (obj.username == "admin" && obj.password == "21232F297A57A5A743894A0E4A801FC3"){
		alert ("Login successfully");
		sessionStorage.isAuthen = true;
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
