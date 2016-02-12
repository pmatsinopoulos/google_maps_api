$(document).ready(function () {
    var map;

    function initMap() {
        map = new google.maps.Map($('#map')[0], {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
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
});

