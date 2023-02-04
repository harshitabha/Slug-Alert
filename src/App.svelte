<script>
	import Modal from "./Modal.svelte";

	let people = [
		{
			name: 'Yoshi',
			beltColor: 'black',
			age: 25,
			id: 1
		},
		{
			name: 'Mario',
			beltColor: 'orange',
			age: 45,
			id: 2
		},
		{
			name: 'Luigi',
			beltColor: 'brown',
			age: 35,
			id: 3
		},
	]

	let showModal = false;

	const delPerson = (id) => {
		people = people.filter((person) => person.id != id)
	};

	const toggleModal = () => { showModal = !showModal; };
</script>

<!-- if the prop name is the same is the var name then it will automatically set that prop val to that var -->
<Modal message="Sign up for offers" {showModal} on:click={toggleModal}/>

<main>
	<button on:click={toggleModal}>Toggle</button>
	<!-- 
		like a for each loop in js
		to use a each block every element being looped through must have a unique id
	 -->
	{#each people as p (p.id)}
		<div>
			<h4>{p.name}</h4>
			{#if p.beltColor === "black"}
				<p><strong>Master</strong></p>
			{/if}
			<p>{p.age} years old, {p.beltColor} belt.</p>
			<button on:click={() => delPerson(p.id)}>Delete Person</button>
		</div>
	<!-- In case the people arr is empty -->
	{:else}
		<p>No people to show</p>
	{/each}
	
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

	.row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1em;
	}

	/* to center the input field */
	input {margin-top: 1em;}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>