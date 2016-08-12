myID = document.getElementById("myID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y > 10 && y <= 50) {
    myID.className = "sun pt1"
  } 
  else if (y>50 && y<150) {
    myID.className = "sun pt2"
  }  
  else if (y>=150 && y<=300) {
    myID.className = "sun pt3"
  }  
  else if (y>300 && y<500) {
    myID.className = "sun pt4"
  }  
  else if (y>500) {
    myID.className = "sun pt5"
  }  
  else {
    myID.className = "sun none"
  }
};

window.addEventListener("scroll", myScrollFunc);