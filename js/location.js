//Triple Tree office
var p1 = {y: 45.684895, x: -111.023939};
var p2 = {y: 45.684824, x: -111.023471};
var p3 = {y: 45.684436, x: -111.023623};
var p4 = {y: 45.684518, x: -111.024134};

var points = [p1,p2,p3,p4];

var queryTime = 5000;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById('alert').innerText = "Turn your GPS on and refresh the browser.";
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

var test;
function showPosition(position) {
  test = {y: position.coords.latitude, x: position.coords.longitude};
  containPoint();
}

function containPoint() {
  var i = 0;
  var j = 0;
  var result = false;
  for (i = 0, j = points.length - 1; i < points.length; j = i++) {
    if (((points[i].y > test.y) != (points[j].y > test.y)) &&
    (test.x < (points[j].x - points[i].x) * (test.y - points[i].y) / (points[j].y-points[i].y) + points[i].x)) {
      result = !result;
    }
  }
  console.log(test.y);
  var d = new Date();
  var n = d.getHours();
  
  if (result) {
    if (8 < n && n < 12) { transition(); }
    else { 
      console.log("failed"); 
      document.getElementById('alert').innerText = "Doors aren't open yet!"; 
    }
  }
  else { 
    if (8 < n && n < 12) { document.getElementById('alert').innerText = "Get to the show!"; }
    else { document.getElementById('alert').innerText = "Doors aren't open yet!"; }
    post(); 
  }
}

window.setInterval(function(){
  getLocation();
}, queryTime);

var tog = 0;

function transition() {
  if (tog == 0) { document.getElementById('mainView').style.background = "#4300FF"; }
  document.getElementById('ticket').style.top = "55%";
  document.getElementById('pre').style.left = "-150%";
  tog = 1;
}

function post() {
  document.getElementById('mainView').style.background = "#FF3D00";
  document.getElementById('ticket').style.top = "150%";
  document.getElementById('pre').style.left = "50%";
}
