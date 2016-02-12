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

            //map.fitBounds(bounds);

            var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
            var lngSpan = bounds.east - bounds.west;
            var latSpan = bounds.north - bounds.south;
            for (var i = 0; i < secretMessages.length; i++) {
                var marker = new google.maps.Marker({
                    position: {
                        lat: bounds.south + latSpan * Math.random(),
                        lng: bounds.west + lngSpan * Math.random()
                    },
                    map: map
                });
                attachSecretMessage(marker, secretMessages[i]);
            }

            function attachSecretMessage(marker, secretMessage) {
                var infoWindow = new google.maps.InfoWindow({
                    content: secretMessage
                });
                marker.addListener('click', function() {
                    infoWindow.open(marker.get('map'), marker);
                });
            }

            //
            // Display an info window to ask user to change the zoom level
            var infoWindow = new google.maps.InfoWindow({
                content: 'Change the zoom level',
                position: center_location
            });
            infoWindow.open(map);

            map.addListener('zoom_changed', function() {
                infoWindow.setContent('Zoom: ' + map.getZoom());
            });
        } // initMap()

        initMap();
    })();
});

