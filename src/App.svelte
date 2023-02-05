<script>
    let landingB = true;
    let sHome = false; // student home
    let rHome = false; // responder home
    let rMap = false;

    import {onMount} from 'svelte';
    import Landing from "./screens/Landing.svelte";
    import ResponderPage from "./screens/ResponderPage.svelte";
    import Student from "./screens/Student.svelte";
    import MapHolder from "./screens/mapHolder.svelte";
    console.log(landingB)

    const toggleHome = () => {
        landingB = false;
        sHome = true;
    };
    
</script>

<body>
    <!-- If the landing screen should be active -->
    {#if landingB}
        <Landing on:click={toggleHome}/>
    {/if}

    {#if sHome}
        <Student />
    {/if}

    {#if rHome}
        <ResponderPage />
    {/if}

    {#if rMap}
        <MapHolder />
    {/if}
    
</body>

<style>

</style>