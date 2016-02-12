$(document).ready(function () {
    (function(){
        var map;

        function initMap() {
            map = new google.maps.Map($('#map')[0], {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8,
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.BOTTOM_LEFT
                }
            });
        }

        initMap();

        // --------------
        $('#disable-default-ui').on('change', function () {
            var checked = $(this).is(':checked');
            map.setOptions({disableDefaultUI: checked});
            if (!checked) {
                // for some reason, when we disable the default UI and then enable it back again, the
                // map type controls are not restored. That's why we call it explicitly.
                map.setOptions({mapTypeControl: true});
            }
        });

        //-----------------------------------
        // Add Custom Control with Javascript
        var controlDiv = document.createElement('div');
        $(controlDiv).addClass('foo');

        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25, 25, 25)';
        controlText.style.fontFamily = 'Roboto, Arial, sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Center Map';
        controlUI.appendChild(controlText);

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);

        google.maps.event.addDomListener(controlDiv, 'click', function() {
            // default coordinates on Chicago
            var latitude  = 41.850,
                longitude = -87.650;
            var input_latitude = $('#latitude').val().trim();
            var input_longitude = $('#longitude').val().trim();
            if (input_latitude !== '') {
                latitude = parseFloat(input_latitude);
            }
            if (input_longitude !== '') {
                longitude = parseFloat(input_longitude);
            }
            var center = {lat: latitude, lng: longitude};
            map.setCenter(center);
        });
        //-----------------------------------

    })();
});

