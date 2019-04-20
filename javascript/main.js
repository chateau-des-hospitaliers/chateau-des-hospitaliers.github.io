(function($) {

  "use strict";

  new WOW().init()

}(jQuery));

function init_map() {

  "use strict";

  var map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 15,
    center: {lat: 43.735718, lng: 4.090071}
  });

};
