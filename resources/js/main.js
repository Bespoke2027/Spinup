// Function for builing the map
function buildMap() {
    // Global variables
    var map;
    var trailSelected;

    // These are arrays, with each point being two variables at an index
    // Easy trail coords
    var trailRouteE = [
        {lat: 57.112958,lng: -2.132883},
        {lat: 57.111504,lng: -2.132228},
        {lat: 57.109967,lng: -2.133109},
        {lat: 57.109938,lng: -2.130867}
    ];

    // Medium trail coords
    var trailRouteM = [
        {lat: 57.112488,lng: -2.134832},
        {lat: 57.111501,lng: -2.137321},
        {lat: 57.109964,lng: -2.139100},
        {lat: 57.109838,lng: -2.1308533}
    ];

    // Hard trail coords
    var trailRouteH = [
        {lat: 57.113451,lng: -2.130989},
        {lat: 57.112426,lng: -2.127867},
        {lat: 57.110748,lng: -2.128736}
    ];

    // Easy trail information box contents
    var infoE =
        '<div class="info infoE" id="infoE"><h2>Bunny Slope</h2></div>' +
        '<img class="infoImg" src="resources/img/infowindowIcon.jpg" /><div class="bodyContent">' +
        '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />' +
        '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>' +
        '</div>' +
        '</div>';

    // Medium trail information box contents
    var infoM =
        '<div class="info infoM" id="infoM"><h2>Medium Mountaineering</h2></div>' +
        '<img class="infoImg" src="resources/img/infowindowIcon.jpg" /><div class="bodyContent">' +
        '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />' +
        '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>' +
        '</div>' +
        '</div>';

    // Hard trail information box contents
    var infoH =
        '<div class="info infoH" id="infoH"><h2>Hardcore Henry</h2></div>' +
        '<img class="infoImg" src="resources/img/infowindowIcon.jpg" /><div class="bodyContent">' +
        '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />' +
        '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>' +
        '</div>' +
        '</div>';

    // Function to handle building the map
    function initialize() {
        // Set the map centre
        trailSelected = new google.maps.LatLng(57.110531, -2.131935);
        // Seet the map ID
        var mapCanvas = document.getElementById('google-map');
        // Map options
        var mapOptions = {
            // The center of the map, will be used later for zooming to the selected trail
            center: trailSelected,
            // Default zoom level for the map
            zoom: 15,
            // Type of map to show
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        // set the new map object
        map = new google.maps.Map(mapCanvas, mapOptions);

        /* NOTE TO FUTURE GENERATIONS
        This is where you add the Routes made earlier
        map object, trail route coords, info for info box, colour of the line, name of the button for toggling(this needs to be improved) */
        // Add the easy route
        addRoute(map, trailRouteE, infoE, "#32CD32", "trailBtnE");
        // Add the medium route
        addRoute(map, trailRouteM, infoM, "#2196F3", "trailBtnM");
        // Add the hard route
        addRoute(map, trailRouteH, infoH, "#FF0000", "trailBtnH");
    }

    // Function to add the routes
    function addRoute(map, trailRoute, info, colour, trailBtn) {
        // Temporary variable for the marker we are going to add to the start of the trail
        var marker = new google.maps.Marker({
            // set the position of the inital marker to the first coordinate in the trail coords
            position: trailRoute[0]
        });
        // Put the marker on the map
        marker.setMap(map);

        // Temporary variable for the actual trail we want to make
        var trail = new google.maps.Polyline({
            // Set the path to the trail coords array
            path: trailRoute,
            // Set geodesic mode for distance calculations later
            geodesic: true,
            // Set the colour of our trail to the colour we passed through
            strokeColor: colour,
            // Set the trail line opacity
            strokeOpacity: 1.0,
            // Set the trail line thickness
            strokeWeight: 4
        });
        // Draw the trail on the map
        trail.setMap(map);

        // This is our event listener for the markers to open the info box
        google.maps.event.addListener(marker, 'click', function() {
            // Temporary variable to hold our info box
            var infoBox = new google.maps.InfoWindow({
                // Set the contents of our info box to our info box info
                content: info
            });
            // Set the info box to open on our marker
            infoBox.open(map, marker);
        });

        // Add a listener for our toggle buttons
        document.getElementById(trailBtn).addEventListener("click", function() {
            // Call the toggle function with our marker and trail that we want to hide or show
            togglePath(marker, trail);
            // Call the toggle function to swap the colours of our buttons
            toggleBtn(trailBtn);
        });

        // Run the resize function, this will be used later for zooming to trails
        resize();
        // Add a listener to run the resize function when the window resize to maintain focus
        google.maps.event.addDomListener(window, 'resize', resize);
    }

    // Function for showing or hiding our trails and their markers
    function togglePath(marker, trail) {
        // Check if the trail and marker are hidden
        if (trail.getMap() === null && marker.getMap() === null) {
            // Redraw our trail
            trail.setMap(map);
            // Place our marker
            marker.setMap(map);
        } else {
            // Hide our trail
            trail.setMap(null);
            // Hide our marker
            marker.setMap(null);
        }
    }

    // Function to toggle the colour of our button
    function toggleBtn(trailBtn){
        alert(document.getElementById(trailBtn).className);
    }

    // Function to hold the map on the our selected trail
    function resize() {
        // Set the map centre to our trail
        map.setCenter(trailSelected);
    }

    // Finally run our initialize function to build our map
    initialize();
}
