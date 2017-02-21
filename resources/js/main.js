function myMap() {

// Easy Trail
var p1 = new google.maps.LatLng(57.112958, -2.132883);
var p2 = new google.maps.LatLng(57.111504, -2.132228);
var p3 = new google.maps.LatLng(57.109967, -2.133109);
var p4 = new google.maps.LatLng(57.109938, -2.130867);

// Medium Trail
var m1 = new google.maps.LatLng(57.112488, -2.134832);
var m2 = new google.maps.LatLng(57.111501, -2.137321);
var m3 = new google.maps.LatLng(57.109964, -2.139100);
var m4 = new google.maps.LatLng(57.109838, -2.1308533);

// Difficult Trail 
var d1 = new google.maps.LatLng(57.113451, -2.130989);
var d2 = new google.maps.LatLng(57.112426, -2.127867);
var d3 = new google.maps.LatLng(57.110748, -2.128736);


var mapCanvas = document.getElementById("map");
var mapOptions = {	center: new google.maps.LatLng(57.110531, -2.131935), 
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.TERRAIN};
var map = new google.maps.Map(mapCanvas,mapOptions);

var trail = new google.maps.Polyline({
	path: [p1, p2, p3, p4],
	strokeColor: "#32CD32",
	strokeOpacity: 0.8,
	strokeWeight: 2
});
trail.setMap(map);
	
var trailMed = new google.maps.Polyline({
	path: [m1, m2, m3, m4],
	strokeColor: " #FFC200",
	strokeOpacity: 0.8,
	strokeWeight: 2
});
trailMed.setMap(map);

var trailHard = new google.maps.Polyline({
	path: [d1, d2, d3],
	strokeColor: "#FF0000",
	strokeOpacity: 0.8,
	strokeWeight: 2 
});
trailHard.setMap(map);
	

 var marker = new google.maps.Marker({position:p1});
 marker.setMap(map);
 
  var marker2 = new google.maps.Marker({position:m1});
 marker2.setMap(map);
 
 var marker3 = new google.maps.Marker({position: d1});
 marker3.setMap(map);
 
 // Toggle Easy
 document.getElementById("trailToggleEasy").addEventListener("click", function() {
 if (trail.getMap() == null && marker.getMap() == null) {
	trail.setMap(map); 
	marker.setMap(map);
}
  else { 
	trail.setMap(null);
	marker.setMap(null);
	}
  });
  
  // Toggle Medium
 document.getElementById("trailToggleMed").addEventListener("click", function() {
 if (trailMed.getMap() == null && marker2.getMap() == null) {
	trailMed.setMap(map); 
	marker2.setMap(map);
}
  else { 
	trailMed.setMap(null);
	marker2.setMap(null);
	}
  });
  
   // Toggle Hard
 document.getElementById("trailToggleHard").addEventListener("click", function() {
 if (trailHard.getMap() == null && marker3.getMap() == null) {
	trailHard.setMap(map); 
	marker3.setMap(map);
}
  else { 
	trailHard.setMap(null);
	marker3.setMap(null);
	}
  });
  
  
 // easy trail marker
 var easyInfowindow =     
      '<div id="greenInfowindow"><h2>Bunny Slope</h2></div>'+
      '<img class="infowindowImage" src="infowindowIcon.jpg" /><div id="bodyContent">'+
      '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />'+
      '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>'+
      '</div>'+
      '</div>';
var mediumInfowindow =     
      '<div id="amberInfowindow"><h2>Medium Mountaineering</h2></div>'+
      '<img class="infowindowImage" src="infowindowIcon.jpg" /><div id="bodyContent">'+
      '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />'+
      '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>'+
      '</div>'+
      '</div>';
var difficultInfowindow =     
      '<div id="redInfowindow"><h2>Hardcore Henry</h2></div>'+
      '<img class="infowindowImage" src="infowindowIcon.jpg" /><div id="bodyContent">'+
      '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />'+
      '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>'+
      '</div>'+
      '</div>';
    

 google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content: easyInfowindow
    });
  infowindow.open(map,marker);
  
});

// medium trail marker
 google.maps.event.addListener(marker2,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content: mediumInfowindow
    });
  infowindow.open(map,marker2);
  
});

// difficult trail marker
 google.maps.event.addListener(marker3,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content: difficultInfowindow
    });
  infowindow.open(map,marker3);
  
});


}
  

  
