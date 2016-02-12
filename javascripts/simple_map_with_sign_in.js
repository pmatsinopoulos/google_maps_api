$(document).ready(function () {
    (function(){

        function initMap() {
            //37.9715323,23.7235552,16z
            var center_location = {lat: 37.9715323, lng: 23.7235552};
            var map = new google.maps.Map($('#map')[0], {
                zoom: 16,
                center: center_location
            });

            var marker = new google.maps.Marker({
                map: map,
                place: {
                    location: center_location,
                    query: 'Ακρόπολη, Αθήνα, Ελλάδα'
                },
                attribution: {
                    source: 'My Google Map API Demos',
                    webUrl: 'https://www.techcareerbooster.com'
                }
            });

            var infoWindow = new google.maps.InfoWindow({
                content: 'Ακρόπολις των Αθηνών'
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        } // initMap();

        initMap();



    })();
});

