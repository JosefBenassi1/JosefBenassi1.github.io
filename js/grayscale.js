/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

            /* Radians to Degrees:  x * Math.PI/180; */
        $(function(){
            /* Settings */
            var rotateSlider = {
              slideHeight : 360,
              slideWidth : 480,
            };
            
            /* Do Math and set properties */
            rotateSlider.slideCount = $('.rotate-slider .slides li').length;
            rotateSlider.slideAngle = 360 / $('.rotate-slider .slides li').length;
            rotateSlider.sliderElement = $('.rotate-slider');
            rotateSlider.slides = $('.rotate-slider .slides li');
            rotateSlider.slidesContainer = $('.rotate-slider .slides');
            rotateSlider.slideAngle = 360 / rotateSlider.slideCount;
            rotateSlider.halfAngleRad = rotateSlider.slideAngle / 2 * Math.PI/180;
            rotateSlider.innerRadius = 1 / Math.tan(rotateSlider.halfAngleRad) * rotateSlider.slideWidth / 2;
            rotateSlider.outerRadius = Math.sqrt(Math.pow(rotateSlider.innerRadius + rotateSlider.slideHeight, 2) + (Math.pow((rotateSlider.slideWidth / 2), 2)));
            rotateSlider.upperArcHeight = rotateSlider.outerRadius - (rotateSlider.innerRadius + rotateSlider.slideHeight);
            rotateSlider.lowerArcHeight = rotateSlider.innerRadius - (rotateSlider.innerRadius * (Math.cos(rotateSlider.halfAngleRad)));
            rotateSlider.slideFullWidth = (Math.sin(rotateSlider.halfAngleRad) * rotateSlider.outerRadius) * 2;
            rotateSlider.slideFullHeight = rotateSlider.upperArcHeight + rotateSlider.slideHeight + rotateSlider.lowerArcHeight
            rotateSlider.slideSidePadding = (rotateSlider.slideFullWidth - rotateSlider.slideWidth) / 2;
            rotateSlider.fullArcHeight = rotateSlider.outerRadius - (rotateSlider.outerRadius * (Math.cos(rotateSlider.halfAngleRad)));
            rotateSlider.lowerArcOffset = (rotateSlider.slideFullWidth - (Math.sin(rotateSlider.halfAngleRad) * rotateSlider.innerRadius * 2)) / 2;
            
            /* Set height and width of slider element */
            rotateSlider.sliderElement.css('height', rotateSlider.slideHeight+'px');
            rotateSlider.sliderElement.css('width', rotateSlider.slideWidth+'px');
            
            /* Set height and width of slides container and offset width*/
            rotateSlider.slidesContainer.css('height', rotateSlider.outerRadius*2+'px');
            rotateSlider.slidesContainer.css('width', rotateSlider.outerRadius*2+'px');
            
            /* Offset width and arc height */
            rotateSlider.slidesContainer.css('transform', 'translateX(-50%)');
            rotateSlider.slidesContainer.css('top', '-'+ rotateSlider.upperArcHeight +'px');
            
            /* Generate path for slide clipping */
            var pathCoords = 'M 0 '+rotateSlider.fullArcHeight;
            pathCoords += ' A '+rotateSlider.outerRadius+' '+rotateSlider.outerRadius+' 0 0 1 '+rotateSlider.slideFullWidth+' '+rotateSlider.fullArcHeight;
            pathCoords += ' L '+(rotateSlider.slideFullWidth-rotateSlider.lowerArcOffset)+' '+rotateSlider.slideFullHeight;
            pathCoords += ' A '+rotateSlider.innerRadius+' '+rotateSlider.innerRadius+' 0 0 0 '+rotateSlider.lowerArcOffset+' '+rotateSlider.slideFullHeight+' Z';
            $('#slideClip').find('path').attr('d', pathCoords);
            
            /* Apply styles to each slide */
            var i = 0;
            rotateSlider.slides.each(function(){
                /* Set distance from point of rotation */
                $(this).css('transform-origin', 'center '+(rotateSlider.innerRadius + rotateSlider.slideHeight)+'px');
                
                /* Set slide Height and Width */
                $(this).css('height', rotateSlider.slideHeight+'px');
                $(this).css('width', rotateSlider.slideWidth+'px');
                
                /* Set calculated padding for width, upper arc height, and lower arc height */
                $(this).css('padding', rotateSlider.upperArcHeight +'px '+rotateSlider.slideSidePadding+'px '+rotateSlider.lowerArcHeight+'px '+rotateSlider.slideSidePadding+'px ');
                
                /* Offset container Arc Height */
                $(this).css('top', rotateSlider.upperArcHeight +'px');
                
                /* Offset Width, then Rotate Slide, then offset individual Top Arcs  */
                $(this).css('transform', 'translateX(-50%) rotate('+rotateSlider.slideAngle * i+'deg) translateY(-'+ rotateSlider.upperArcHeight +'px)');
                
                /* Add clipping path  */
                $(this).css('-webkit-clip-path', 'url(#slideClip)');
                $(this).css('clip-path', 'url(#slideClip)');
                
                i++;
            });
            
            /* Set Interval to rotate */
            var currentRotation = 0;
            var rotateInterval = window.setInterval(function(){
                if(!rotateSlider.slidesContainer.hasClass('animate')){
                    rotateSlider.slidesContainer.addClass('animate')
                }
                currentRotation = currentRotation - rotateSlider.slideAngle;
                rotateSlider.slidesContainer.css('transform', 'translateX(-50%) rotate('+currentRotation+'deg)');
            }, 4000);
        });

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
