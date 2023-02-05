<script>
	import Box from "../components/Box.svelte";
    let text = document.querySelector('#text');
    let alertData = [
        {name: "Just Bean", time: 15, dist: .5, lat: 36.994693, lng: -122.045489, pfp: "", id: 0},
        {name: "Person Two", time: 30, dist: 1, lat: 37.014887, lng: -122.064763, pfp: "", id: 1},
        {name: "Jeffrey Lastname", time: 20, dist: .25, lat: 36.991617, lng: -122.083732, pfp: "", id: 2},
        {name: "Me Myself", time: 5, dist: .3, lat: 36.994614, lng: -122.001298, pfp: "", id: 3},
    ]

    const userMap = (alert) => {
        id = alert.id

    }

</script>

<style>
	h1 {
		color: #930000;
		font-family: 'Noto Sans', sans-serif;
		font-size: 2em;
        text-align: center;
        padding-bottom: 15px;
        padding-top: 15px;
        background-color: #F2FEFF;
	}
    body {
        background-color: #F2FEFF;
        padding: 20px;
        width:auto;
        height:auto;
        position:auto;
    }
</style>

<body>
    <h1>Requests for Help</h1>
    <div>
        {#each alertData as alert}
            <Box name={alert.name} time={alert.time} dist={alert.time} src={alert.pfp} on:click/>
        {/each}
    </div>
</body>