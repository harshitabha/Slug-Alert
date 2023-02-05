<script>
	import Map from './Map.svelte';
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
    width: 60vw;
    height: 70vh;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    border: 3px solid rgb(200, 230, 230);
    margin: 0;
}

</style>

<body>
    <div>{ready?'Hello':"Not Hello"}</div>

    { #if ready }
        <div id="box">
            <Map></Map>
        </div>
    { /if }
</body>