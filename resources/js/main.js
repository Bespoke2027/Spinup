function buildMap() {
    var map;
    var map_center;
    var path_bounds;

    // Easy Trail
    var trailRouteE = [
        {lat: 57.112958,lng: -2.132883},
        {lat: 57.111504,lng: -2.132228},
        {lat: 57.109967,lng: -2.133109},
        {lat: 57.109938,lng: -2.130867}
    ];

    // Medium Trail
    var trailRouteM = [
        {lat: 57.112488,lng: -2.134832},
        {lat: 57.111501,lng: -2.137321},
        {lat: 57.109964,lng: -2.139100},
        {lat: 57.109838,lng: -2.1308533}
    ];

    // Hard Trail
    var trailRouteH = [
        {lat: 57.113451,lng: -2.130989},
        {lat: 57.112426,lng: -2.127867},
        {lat: 57.110748,lng: -2.128736}
    ];

    // Easy Trail Info
    var infoE =
        '<div class="info infoE" id="infoE"><h2>Bunny Slope</h2></div>' +
        '<img class="infoImg" src="resources/img/infowindowIcon.jpg" /><div class="bodyContent">' +
        '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />' +
        '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>' +
        '</div>' +
        '</div>';

    // Medium Trail Info
    var infoM =
        '<div class="info infoM" id="infoM"><h2>Medium Mountaineering</h2></div>' +
        '<img class="infoImg" src="resources/img/infowindowIcon.jpg" /><div class="bodyContent">' +
        '<p><b>This</b> easy slope will have you... something about bike trails ya ya <br /><br />' +
        '<p>Starts at this place and ends in this place, approximate time taken 2 minutes.</p>' +
        '</div>' +
        '</div>';

    // Hard Trail Info
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
        map_center = new google.maps.LatLng(57.110531, -2.131935);
        // Seet the map ID
        var mapCanvas = document.getElementById('google-map');
        var mapOptions = {
            center: map_center,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(mapCanvas, mapOptions);

        addRoute(map, trailRouteE, infoE, "#32CD32", "trailBtnE");
        addRoute(map, trailRouteM, infoM, "#2196F3", "trailBtnM");
        addRoute(map, trailRouteH, infoH, "#FF0000", "trailBtnH");
    }

    function addRoute(map, trailRoute, info, colour, trailBtn) {
        var marker = new google.maps.Marker({
            position: trailRoute[0]
        });
        marker.setMap(map);

        var trail = new google.maps.Polyline({
            path: trailRoute,
            geodesic: true,
            strokeColor: colour,
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        trail.setMap(map);

        google.maps.event.addListener(marker, 'click', function() {
            var infoBox = new google.maps.InfoWindow({
                content: info
            });
            infoBox.open(map, marker);
        });
        resize();

        google.maps.event.addDomListener(window, 'resize', resize);
        // Toggle Easy
        document.getElementById(trailBtn).addEventListener("click", function() {
            togglePath(marker, trail);
        });
    }

    function togglePath(mark, trail) {
        if (trail.getMap() === null && mark.getMap() === null) {
            trail.setMap(map);
            mark.setMap(map);
            return true;
        } else {
            trail.setMap(null);
            mark.setMap(null);
            return false;
        }
    }

    function resize() {
        map.setCenter(map_center);
    }

    initialize();
    }
