<script>
	import Box from "../components/Box.svelte";
    let text = document.querySelector('#text');
    let userData = [
        {name: "Just Bean", time: 15, dist: .5, pfp: ""},
        {name: "Person Two", time: 30, dist: 1, pfp: ""},
        {name: "Jeffrey Lastname", time: 20, dist: .25, pfp: ""},
        {name: "Me Myself", time: 5, dist: .3, pfp: ""},
    ]
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
        {#each userData as user}
            <Box name={user.name} time={user.time} dist={user.time} src={user.pfp} on:click/>
        {/each}
    </div>
</body>