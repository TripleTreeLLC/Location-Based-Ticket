# Location-Based-Ticket

Web app that displays a mobile ticket, activating / deactivating based on a specified time and location.

Change geofenced location coordinates in the js/location.js -> 

var p1 = {y: 45.684895, x: -111.023939};
var p2 = {y: 45.684824, x: -111.023471};
var p3 = {y: 45.684436, x: -111.023623};
var p4 = {y: 45.684518, x: -111.024134};

Go to google maps to grab the coordinates around the area you'd like to Geofence (https://www.lifewire.com/latitude-longitude-coordinates-google-maps-1683398)

Change start / end time-fence variables in js/location.js. "8" and "12" are the start and end times, respectively, in military time ->

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
