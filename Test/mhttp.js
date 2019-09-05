
var FAILED_TIMES = 3;

function main(){
	fetchGet();
	// fetchPost();
	// window.location.replace("signin.html");
}


// Cool
function fetchPost(){
	let url = 'https://api.keyvalue.xyz/new/dunglam';
	// let dat = {name: 'okie'};
   
	let header = new Headers({
		// 'Content-Type': 'multipart/form-data',
		'Content-Type': 'text/plain',
	});

	var request = new Request(url, {
		method: 'POST', 
		headers: header,
		// body: JSON.stringify(data), 
	});
	const decoder = new TextDecoder('utf-8')
	fetch(request)
	.then((response) => response.body
								.getReader()
								.read()
								.then(({value, done}) => decoder.decode(value)))
	.then(result => {console.log(result)})
	.catch(error => {console.log(error);});
}


// Cool
function fetchGet(){
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
function doPost_03(){
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

// work well
function doPost_04(){
	var url = 'https://api.keyvalue.xyz/c6edcaea/dunglam';
	// The data we are going to send in our request
	var data = {name: 'test quai'}

	var url = 'https://httpbin.org/post'

	fetch(url, {
		method: 'post',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
	body: JSON.stringify(data)}).
	then(res=>res.json()).
	then(res => console.log(res));
}


// Work well
function doPost_05(){
	var url = 'https://api.keyvalue.xyz/new/dunglam';
   // // The data we are going to send in our request
   var data = {name: 'okie'}
   
  var request = new Request(url, {
	method: 'POST', 
	redirect: 'follow',
	mode: 'cors',
	// body: JSON.stringify(data), 
	headers:  new Headers({
		'Content-Type': 'multipart/form-data',
		// 'Content-Type': 'application/json',
			// 'Access-Control-Allow-Origin':'*'
		})
	});

	fetch(request)
	// .then(function(resp) {
	// 	console.log(resp);
	// });
	.then(function (response) {
		return response.json();
	})
	.then(function (result) {
		console.log(result);
	})
	.catch (function (error) {
		// console.log('Request failed', error);
	});
}

// Cool sample - https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api
// function logResult(result) {
// 	console.log(result);
//   }
  
//   function logError(error) {
// 	console.log('Looks like there was a problem: \n', error);
//   }
  
//   function validateResponse(response) {
// 	if (!response.ok) {
// 	  throw Error(response.statusText);
// 	}
// 	return response;
//   }
  
//   function readResponseAsJSON(response) {
// 	return response.json();
//   }
  
//   function fetchJSON(pathToResource) {
// 	fetch(pathToResource) // 1
// 	.then(validateResponse) // 2
// 	.then(readResponseAsJSON) // 3
// 	.then(logResult) // 4
// 	.catch(logError);
//   }
  
//   fetchJSON('examples/example.json');



// Sample for assign code. Not yet test this method
// let defaultOptions = {
// 	url:'',
// 	method:'POST',
// 	mode: 'cors',
// 	headers:{
// 	'Access-Control-Allow-Origin':'*'
// 	},
// 	body:null,
// 	};
	
// 	let UploadFile=function(options){
	
// 	let header = new Headers({
// 		'Access-Control-Allow-Origin':'*',
// 		'Content-Type': 'multipart/form-data'
// 	});
// 	let opt = Object.assign({}, defaultOptions, options); //将默认的参数和传过来的合并在一起
// 	let sentData={
// 		method:opt.method,
// 		mode: 'cors',
// 		header: header,
// 		body:opt.body || ''
// 	};
// 	return new Promise((reslove,reject)=>{
// 		fetch(opt.url, sentData)
// 			.then(response=> response.json())
// 			.then(responseText=>{
// 				let resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
// 				//console.log(resp);
// 				reslove(resp); //这个resp会被外部接收
// 			}).catch(err=>{
// 			//console.log(err);
// 			reject(err);
// 		});
// 	}).catch(err => {
// 			console.log('出错了');
// 		});


function FirstRequestToGraph(AccessToken){
	fetch('https://graph.facebook.com/v2.8/me?fields=posts.limit(275){privacy}%2Cname&access_token='+AccessToken, {
  method: 'GET'
})
.then(function(response) {
  return response.json();
})
.then(function(json){
  NextPage = json.posts.paging.next;
})
.catch(function(err) {
  console.log(`Error: ${err}` )
});

}



// Fetch does not support waiting download data
function fetchPost_pass(){
	let url = 'https://api.keyvalue.xyz/new/dunglam';
	// The data we are going to send in our request
	let dat = {name: 'okie'};
   
	let header = new Headers({
		// 'Content-Type': 'multipart/form-data',
		'Content-Type': 'text/plain',
	});

	var request = new Request(url, {
		method: 'POST', 
		headers: header,
		// body: JSON.stringify(data), 
	});
	const decoder = new TextDecoder('utf-8')
	fetch(request)
	.then(response => {
	  					response.body
								.getReader()
								.read()
								.then(({value, done}) => {
		  													console.log(decoder.decode(value))
														})
	})
	.catch(error => {console.log(error);});

	// Work well
	function doPost_duynhat(){
		let url = 'https://api.keyvalue.xyz/new/dunglam';
		// The data we are going to send in our request
		let data = {name: 'okie'};
	   
		let header = new Headers({
			'Content-Type': 'multipart/form-data',
			// 'Access-Control-Allow-Origin':'*'
			});
	
		var request = new Request(url, {
			method: 'POST', 
			headers: header,
			// redirect: 'follow',
			// mode: 'cors',
			// body: JSON.stringify(data), 
		});
	
		fetch(request).
		then((res) => {console.log(res.body); return res;}).
		catch(error => {console.log(error);});
	}

	
	// fetch(request).
	// then((res) => {
	// 	// console.log(res);
	// 	return res.body.getReader();
	// 	// while(true){
	// 	// 	if(res.ok){
	// 	// 		console.log(res);
	// 	// 		break;
	// 	// 	}
	// 	// }	
	// // 	// while(true) {
	// // 	// 	// done is true for the last chunk
	// // 	// 	// value is Uint8Array of the chunk bytes
	// // 		// const {done, value} = await reader.read();
		  
	// // 	// 	if (done) {
	// // 	// 		console.log(value);
	// // 	// 	  break;
	// // 	// 	};
	// // 	// }
	// // 	// console.log(reader);
	// // 	// console.log(res);
	// // 	var d = await res.json();
	// // 	console.log(d);
	// 	return res;
	// }).
	// then((res) => {console.log(res);}).
	// catch(error => {console.log(error);});
}