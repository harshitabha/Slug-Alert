<script>
	import Map from "../components/map.svelte";
	export let ready;
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNUYvzwSOTTsQFmP-zj9n60XGLVaixINw&callback=initMap">
	</script>
</svelte:head>

<style>
:global(body) {
	padding: 10px;
}
#box {
    display: flex;
    background-color: rgb(217, 255, 255);
    padding: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    width: 80vw;
    height: 90vh;
    justify-content: center;
    align-items: top;
    border-radius: 35px;
    border: 3px solid rgb(200, 230, 230);
    margin: 0;
}

</style>

<body>
    { #if ready }
        <div id="box">
            <Map></Map>
        </div>
    { /if }
</body>