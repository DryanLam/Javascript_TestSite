
var FAILED_TIMES = 3;

function main(){
	// doGet();
	doPost_011();
	// window.location.replace("signin.html");
}

function doPost_011(){
	var url = 'https://api.keyvalue.xyz/c6edcaea/dunglam';
   // // The data we are going to send in our request
   let data = {name: 'nao lai'}
   
   var request = new Request(url, {
	method: 'POST', 
	body: JSON.stringify(data), 
	headers: {'Content-Type': 'application/json'}
	});

	fetch(request)
	.then(function(resp) {
		console.log(resp);
	});
}




// Cool
function doGet(){
	const url = 'https://randomuser.me/api/?results=10';

	fetch(url)
	.then((resp) => resp.json())
	.then(data => {console.log(data.results);})
	.catch(error => {console.log(error);});
}
// Be careful return if use .then(resp =>{return resp.json();})

function doPost(){
	const url = 'https://api.keyvalue.xyz/c6edcaea/dunglam';

	// Header
	let header = {
		"content-type":"application/json; charset=UTF-8"
	};

	// Body data
	let data = {
		"data":"tao dang test"
	};
	
	// Create our request constructor with all the parameters we need
	var request = new Request(url, {
		method: 'POST',  
		headers: header,
		body: data,
	});

	fetch(request)
	.then(resp => {console.log(resp)})
	.catch(error => {console.log(error);});
}

function Postbk(){
	const url = 'https://api.keyvalue.xyz/new/dunglam';

	// Header
	let header = {
		"content-type":"application/json; charset=UTF-8"
	};

	// The data we are going to send in our request
	let data = {
		// "data":"test"
	};
	
	// Create our request constructor with all the parameters we need
	var request = new Request(url, {
		method: 'POST', 
		body: data, 
		headers: header
	});

	fetch(request)
	.then((resp) => {console.log(resp)})
	.catch(error => {console.log(error);});
}


// Do Get
function doGet_03(){
	const url = 'https://randomuser.me/api/?results=10';

	fetch(url)
	.then((resp) => resp.json())
	.then(function(data) {
		console.log(data.results);
	})
	.catch(function(error) {
		console.log(error);
	});
}

// Do Post
function doPost_02(){
	const url = 'https://api.keyvalue.xyz/new/dunglam';
	// The data we are going to send in our request
	let data = {
		"data":"test"
	};

	// Create our request constructor with all the parameters we need
	var request = new Request(url, {
		method: 'POST', 
		body: data, 
		headers: new Headers()
	});

	fetch(request)
	.then((resp) => resp.json())
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
		console.log(error);
	});
}




// Vanilla
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// Fetch API
//https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data


// Standard 1
function doGet_01(){
	const url = 'https://randomuser.me/api/?results=10';

	fetch(url).
	then(function(data) {
	  // Here you get the data to modify as you please
	}).
	catch(function(error) {
	  // If there is any error you will catch them here
	});
}

// Standard 2
function doGet_02(){
	const url = 'https://randomuser.me/api/?results=10';

	fetch(url).
	then((resp) => resp.json()). // Transform the data into json
	then(function(data) {
	  // Create and append the li's to the ul
	  })
}

// Sameple
function sampleGet(){
	const url = 'https://randomuser.me/api/?results=10';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data.results;
    return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });  
}


// POST standard
function doPost_01(){
	const url = 'https://randomuser.me/api';
	// The data we are going to send in our request
	let data = {
		name: 'Sara'
	}
	// The parameters we are gonna pass to the fetch function
	let fetchData = { 
		method: 'POST', 
		body: data,
		headers: new Headers()
	}
	fetch(url, fetchData)
	.then(function() {
		// Handle response you get from the server
	});
}


// POST standard 
function doPost_02(){
	const url = 'https://randomuser.me/api';
	// The data we are going to send in our request
	let data = {
		name: 'Sara'
	}
	// Create our request constructor with all the parameters we need
	var request = new Request(url, {
		method: 'POST', 
		body: data, 
		headers: new Headers()
	});

	fetch(request)
	.then(function() {
		// Handle response we get from the API
	});
}

// Vanilla post
function doPost_0112(){
	var url = 'https://api.keyvalue.xyz/c6edcaea/dunglam';
   // // The data we are going to send in our request
   let data = "{name: 'tao dang test'}"
   var http = new XMLHttpRequest();
   var params = data;
   http.open('POST', url, true);

   //Send the proper header information along with the request
   http.setRequestHeader('Content-type', 'application/json');

   http.onreadystatechange = function() {//Call a function when the state changes.
	   if(http.readyState == 4 && http.status == 200) {
		   console.log(http.responseText);
	   }
   }
   http.send(params);
}




