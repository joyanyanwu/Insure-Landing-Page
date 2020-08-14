function initMap() {
    // The location of Uluru
    var uluru = { lat: 51.508742, lng: 0.120850 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 7, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}