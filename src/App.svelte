<script>
	// export let name;
	let name = "Slug Alert";
	let total = 0

	const update = () => {
		total += 1
	};
</script>
<!--
	Custome Svelte Component that ships w the app
-->
<main>
	<h1>{name}!</h1>
	<p>This responds</p>
	<button on:click={update} id="adder">Add</button>
	<p id="txt">{total}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>