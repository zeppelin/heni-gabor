function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: { lat: 47.5009102, lng: 19.0564383 },
    zoom: 17,
    scrollwheel: false
  });

  var basicilaMarker = new google.maps.Marker({
    position: new google.maps.LatLng(47.50089, 19.053989),
    map: map,
    title: 'Szent István Bazilika'
  });
  var basicilaInfo = new google.maps.InfoWindow({
    content: '<h4>Esküvő</h4>'
  });
  google.maps.event.addDomListener(basicilaMarker, 'click', function() {
    basicilaInfo.open(map, basicilaMarker);
  });

  var ankertMarker = new google.maps.Marker({
    position: new google.maps.LatLng(47.501341, 19.059081),
    map: map,
    title: 'Szent István Bazilika'
  });
  var ankertInfo = new google.maps.InfoWindow({
    content: '<h4>Lakodalom</h4>'
  });
  google.maps.event.addDomListener(ankertMarker, 'click', function() {
    ankertInfo.open(map, ankertMarker);
  });

  basicilaInfo.open(map, basicilaMarker);
  ankertInfo.open(map, ankertMarker);
}

google.maps.event.addDomListener(window, 'load', initMap);
