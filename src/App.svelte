<script>
    let landing = true;
    let sHome = false; // student home
    let rHome = false; // responder home
    let rMap = false;

    import Landing from "./screens/Landing.svelte";
    import ResponderPage from "./screens/ResponderPage.svelte";
    import Student from "./screens/Student.svelte";
    import MapHolder from "./screens/mapHolder.svelte";

</script>

<body>
    <!-- If the landing screen should be active -->
    {#if landing}
        <Landing />
    {:else if sHome}
        <Student />
    {:else if rHome}
        <ResponderPage />
    {:else if rMap}
        <MapHolder />
    {/if}
    
</body>

<style>

</style>