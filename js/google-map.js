


var map;
function initMap() {
    var myLatLng = { lat: 45.151053, lng: -93.162174 };
   var  map = new google.maps.Map(document.getElementById('map'), {
       zoom: 15,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '620 Civic Heights Dr Circle Pines, MN 55014'
    });
}
