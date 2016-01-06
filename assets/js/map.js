function initialize() {
    var notariat = new google.maps
        .LatLng(46.8792718, 8.6472033);
    var mapCanvas = document.getElementById('map');
    console.log("Initializing map..");

    var mapOptions = {
        center: notariat,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps
        .Map(mapCanvas, mapOptions);

    var marker = new google.maps
        .Marker({position: notariat, title: "Notariat Hansruedi Stadler"});

    // To add the marker to the map, call setMap();
    marker.setMap(map);

}

google.maps
    .event
    .addDomListener(window, 'load', init);
var map;

function init() {
    var mapOptions = {
        center: new google.maps
            .LatLng(46.879584, 8.649091),
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: false,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: true
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "featureType": "water",
                "stylers": [
                    {
                        "saturation": 43
                    }, {
                        "lightness": -11
                    }, {
                        "hue": "#0088ff"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    }, {
                        "saturation": -100
                    }, {
                        "lightness": 99
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#808080"
                    }, {
                        "lightness": 54
                    }
                ]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ece2d9"
                    }
                ]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ccdca1"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#767676"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }, {
                        "color": "#b8cb93"
                    }
                ]
            }, {
                "featureType": "poi.park",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "poi.medical",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }
        ]
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps
        .Map(mapElement, mapOptions);
    var locations = [
        [
            'Notariat Dr. Hansruedi Stadler', 'Hellgasse 23, 6460 Altdorf', '+41418705657', 'stadler.hansruedi@bluewin.ch', 'www.hansruedi-stadler.ch', 46.8792783, 8.649408300000005, 'https://mapbuildr.com/assets/img/markers/default.png'
        ]
    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') {
            description = '';
        } else {
            description = locations[i][1];
        }
        if (locations[i][2] == 'undefined') {
            telephone = '';
        } else {
            telephone = locations[i][2];
        }
        if (locations[i][3] == 'undefined') {
            email = '';
        } else {
            email = locations[i][3];
        }
        if (locations[i][4] == 'undefined') {
            web = '';
        } else {
            web = locations[i][4];
        }
        if (locations[i][7] == 'undefined') {
            markericon = '';
        } else {
            markericon = locations[i][7];
        }
        marker = new google.maps
            .Marker({icon: markericon, position: new google.maps
                    .LatLng(locations[i][5], locations[i][6]), map: map, title: locations[i][0], desc: description, tel: telephone, email: email, web: web});
        if (web.substring(0, 7) != "http://") {
            link = "http://" + web;
        } else {
            link = web;
        }
        bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
    }
    function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
        var infoWindowVisible = (function() {
            var currentlyVisible = false;
            return function(visible) {
                if (visible !== undefined) {
                    currentlyVisible = visible;
                }
                return currentlyVisible;
            };
        }());

        // Format info window
        var html = "<div style='color:#000;background-color:#fff;padding:5px;'><h4>" + title + "</h4><p>" + desc + "</p><p>" + telephone + "</p><a href='mailto:" + email + "' >" + email + "</a><a href='" + link + "'' >" + web + "</a></div>";
        iw = new google.maps.InfoWindow({content: html});
        infoWindowVisible(false);

        // set callback handler
        google.maps.event.addListener(marker, 'click', function() {
            if (infoWindowVisible()) {
                iw.close();
                infoWindowVisible(false);
            } else {
                iw.open(map, marker);
                infoWindowVisible(true);
            }
        });
        google.maps.event.addListener(iw, 'closeclick', function() {
            infoWindowVisible(true);
        });
    }
}
