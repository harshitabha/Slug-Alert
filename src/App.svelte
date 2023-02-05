<script>
    let landing = true;
    let sHome = false; // student home
    let rHome = false; // responder home

    import Landing from "./screens/Landing.svelte";
    import ResponderPage from "./screens/ResponderPage.svelte";
    import Student from "./screens/Student.svelte";

</script>

<body>
    <!-- If the landing screen should be active -->
    {#if landing}
        <Landing />
    {:else if sHome}
        <Student />

    {:else if rHome}
        <ResponderPage />

    {/if}
    
</body>

<style>

</style>