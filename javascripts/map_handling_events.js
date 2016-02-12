$(document).ready(function() {
    (function(){
        function initMap() {
            var center_location = {lat: 37.00, lng: 23.00};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: center_location
            });

            var marker = new google.maps.Marker({
                position: center_location,
                map: map,
                title: 'Click to zoom'
            });

            map.addListener('center_changed', function() {
                window.setTimeout(function() {
                    map.panTo(marker.getPosition());
                }, 3000);
            });

            marker.addListener('click', function() {
                map.setOptions({
                    zoom: 8,
                    center: marker.getPosition()
                })
            });
        }
        initMap();
    })();
});
