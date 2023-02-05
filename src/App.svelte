<script>
    let landingB = true;
    let sHome = false; // student home
    let rHome = false; // responder home
    let rMap = false;

    let uName;
    let uNumber;
    let uType;

    import Landing from "./screens/Landing.svelte";
    import ResponderPage from "./screens/ResponderPage.svelte";
    import Student from "./screens/Student.svelte";
    import MapHolder from "./screens/mapHolder.svelte";
    import InputField from "./components/InputField.svelte";
    console.log(landingB)

    const toggleHome = () => {
        landingB = false;
        sHome = true;
        console.log(uName);
    };

    const updateName = (e) => {
        uName = e.target.value;
        console.log(uName);
    }
    
</script>

<body>
    <!-- If the landing screen should be active -->
    {#if landingB}
        <Landing on:click={toggleHome} on:input={(e) => updateName(e)}>
            <div slot="userName">
                <label for="naame">Name</label>
                <input type="text" id="naame" placeholder="ex: John Doe" bind:value={uName}>
            </div>
        </Landing>
    {/if}

    {#if sHome}
        <Student name={uName}/>
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