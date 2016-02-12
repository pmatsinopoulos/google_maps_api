$(document).ready(function () {
    (function(){

        function initMap() {

            var center_location = {lat: 37.9715323, lng: 23.7235552};
            var map = new google.maps.Map($('#map')[0], {
                zoom: 17,
                center: center_location,
                mapTypeControlOptions: {
                    mapTypeIds: [
                        google.maps.MapTypeId.ROADMAP,
                        google.maps.MapTypeId.SATELLITE
                    ],
                    position: google.maps.ControlPosition.BOOTOM_LEFT
                }
            });

            var widgetDiv = $('#save-widget')[0];
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(widgetDiv);

            var saveWidget = new google.maps.SaveWidget(widgetDiv, {
                place: {
                    location: center_location,
                    query: 'Ακρόπολη, Αθήνα, Ελλάδα'
                },
                attribution: {
                    source: 'My Google Map API Demos',
                    webUrl: 'https://www.techcareerbooster.com'
                }
            });

            var marker = new google.maps.Marker({
                map: map,
                position: saveWidget.getPlace().location
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

