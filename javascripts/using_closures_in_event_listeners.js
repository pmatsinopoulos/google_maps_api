$(document).ready(function() {
    (function(){
        function initMap () {
            var center_location = {lat: -25.363882, lng: 131.044922};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: center_location
            });

            var bounds = {
                north: -25.363882,
                south: -31.203405,
                east: 131.044922,
                west: 125.244141
            };

            map.fitBounds(bounds);

        } // initMap()

        initMap();
    })();
});

