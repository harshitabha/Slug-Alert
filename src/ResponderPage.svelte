<script>
	import Box from './components/Box.svelte';
    import Modal from './components/modal.svelte';

    let text = document.querySelector('#text');
    let userData = [
        {name: "Billy Bob", time: 15, dist: .5, id:0},
        {name: "Person Two", time: 30, dist: 1, id:1},
        {name: "Jeffrey Lastname", time: 20, dist: .25, id:2},
        {name: "Me Myself", time: 5, dist: .3, id:3},
    ]
    let isActive = userData.map(({e}) => false);
    let showModal = false;

    const boxClicked = (id) => {
        console.log(isActive[id]);
        isActive[id] = !isActive[id]; 
        console.log(isActive[id]);
        showModal = !showModal;
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
    <!--function here access user data in click---->
    <div>
        {#each userData as user (user.id)}
            <Box name={user.name} time={user.time} dist={user.dist} on:click={() => boxClicked(user.id)}/>
            <Modal {showModal}>
                <p>Sample text</p>
            </Modal>
        {/each}
    </div>
</body>