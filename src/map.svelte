<script lang='js'>

    let container;
    let map;
    let zoom = 15;
    export let helpLat = 37.006174;
    export let helpLng = -122.046905;
    let center = {lat: helpLat, lng: helpLng};
    var meLat = 0;
    var meLng = 0;
   
    import { onMount } from 'svelte';
   
    onMount(async () => {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
        const map = new google.maps.Map(container, {
            zoom,
            center,
        });

        directionsRenderer.setMap(map);

        let helpLatlng = new google.maps.LatLng(helpLat, helpLng);

        let helpMarker = new google.maps.Marker({
            position: helpLatlng,
            label:"!!"
        });

        helpMarker.setMap(map);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {

                    let meLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

                    let meMarker = new google.maps.Marker({
                        position: meLatlng,
                        label:"ME"
                    });

                    meMarker.setMap(map);
                    map.setCenter(meLatlng);

                    meLat = position.coords.latitude;
                    meLng = position.coords.longitude;

                    let origin = new google.maps.LatLng(meLat, meLng);
                    let destination = new google.maps.LatLng(helpLat, helpLng)
                    calculateAndDisplayRoute(directionsService, directionsRenderer, origin, destination);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            window.alert("Couldn't find your location")
        }

        function calculateAndDisplayRoute(directionsService, directionsRenderer, origin, destination) {
            directionsService
                .route({
                    origin: origin,
                    destination: destination,
                    travelMode: google.maps.TravelMode.WALKING,
                })
                .then((response) => {
                    directionsRenderer.setDirections(response);
                })
                .catch((e) => window.alert("Directions request failed due to " + e));
        }
    });
</script>

<style>
.full-screen {
    width: 65vw;
    height: 70vh;
    border-radius: 25px;
}
</style>

<div class="full-screen" bind:this={container}></div>