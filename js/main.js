$('#revolution-shortcode').revolution({
  delay : 90000,
  hideThumbs:10,
  navigationVOffset : -30,
  navigationType : "none",
  navigationStyle : "round-old"
});

craftyCoffeeLocation = "17 High Street, Brompton, Kent, ME7 5AA";

$(document).ready(function() {
  $('.google-maps').gmap3({
    map:{
      address: craftyCoffeeLocation,
      options:{
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DEFAULT
        },
        navigationControl: true,
        scrollwheel: false,
        streetViewControl: false
      }
    },
    marker:{
      address: craftyCoffeeLocation
    }
  });
});