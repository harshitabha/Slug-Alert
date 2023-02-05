<script>
	import Box from "../components/Box.svelte";
    let text = document.querySelector('#text');
    let userData = [
        {name: "Just Bean", time: 15, dist: .5, pfp: ""},
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
        padding: 0.5em 0;
        background-color: #F2FEFF;
	}
    body {
        background-color: #F2FEFF;
        padding: 20px;
        overflow-x: hidden;
        height:fit-content;
        /* position:auto; */
    }

    .flex {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 85%;
        align-items: center;
    }
</style>

<body>
    <div class="flex">
        <h1>Requests for Help</h1>
        <div>
            {#each userData as user}
                <Box name={user.name} time={user.time} dist={user.time} src={user.pfp}/>
            {/each}
        </div>
    </div>
</body>