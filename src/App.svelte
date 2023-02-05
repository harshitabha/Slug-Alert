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
    import Box from "./components/Box.svelte";
    import {writeToDB} from "./firebaseConfig"

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

    let alerted = false;
    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randTime = randInt(0, 25);
    const alert = () => {
        writeToDB({
            name: uName,
            dist: (Math.random()*2).toFixed(2),
            time: Math.floor(Math.random() * 20) + 1
        });
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
        <Student name={uName} on:click={alert}/>
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
        background-color: #cdd4d5ab;
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