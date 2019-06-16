/* Modal dialog session*/
var modal = document.getElementById("modalTag");
var btn = document.getElementById("btnModal");
var span = document.getElementsByClassName("close")[0];

// Click the button to open modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Click on span X to close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Click anywhere outside of the modal to close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Tooltip session*/
var popOvers = document.querySelectorAll(".Popovers");
for(var i=0; i < popOvers.length; i++){
  var popOver = popOvers[i];
  if(popOver.title !== ''){
    popOver.addEventListener('mouseenter',createTip);
    popOver.addEventListener('mouseleave',cancelTip);
  }
}

function createTip(ev){
    var title = this.title;
    this.title = '';
    this.setAttribute("tooltip", title);
    var tooltipWrap = document.createElement("div"); //creates div
    tooltipWrap.className = 'tooltip'; //adds class
    tooltipWrap.appendChild(document.createTextNode(title)); //add the text node to the newly created div.

    var firstChild = document.body.firstChild;//gets the first elem after body
    firstChild.parentNode.insertBefore(tooltipWrap, firstChild); //adds tt before elem 
    var padding = 5;
    var elProps = this.getBoundingClientRect();
    var tooltipProps = tooltipWrap.getBoundingClientRect(); 
    var topPos = elProps.top - (tooltipProps.height + padding);
    tooltipWrap.setAttribute('style','top:'+topPos+'px;'+'left:'+elProps.left+'px;');
};  

function cancelTip(ev){
    var title = this.getAttribute("tooltip");
    this.title = title;
    this.removeAttribute("tooltip");
    document.querySelector(".tooltip").remove();
};

function openPopup() {
  document.getElementById("myForm").style.display = "block";
}

function closePopup() {
  document.getElementById("myForm").style.display = "none";
}