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

    const updateName = (e) => {
        uName = e.target.value;
        console.log(uName);
    }

    const typeChanged = (e) => {
        uType = e.target.value;
    }
    const toggleHome = () => {
        landingB = false;
        if(uType === 'student') sHome = true;
        else rHome = true;
        console.log(uName, uType);
    };
    
</script>

<body>
    <!-- If the landing screen should be active -->
    {#if landingB}
        <Landing on:click={toggleHome} on:input={(e) => updateName(e)}>
            <div slot="userName">
                <label for="naame">Name</label>
                <input type="text" id="naame" placeholder="ex: John Doe" bind:value={uName}>
            </div>

            <div id="userTypesWrapper" slot="userType">
                <div id="userType">
                    <label for="student" id="label">Student</label>
                    <input type="radio" value="student" id="student" name="uType" on:change={typeChanged}>
                </div>
                <div id="userType">
                    <label for="responder" id="label">Responder</label>
                    <input type="radio" value="responder" id="responder" name="uType" on:change={typeChanged}>
                </div>
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
    #userType {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center
    }

    #userTypesWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: rgb(195, 201, 201);
        border-radius: 5px;
    }

    #label {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    #responder {
        size: 10px;
    }
</style>