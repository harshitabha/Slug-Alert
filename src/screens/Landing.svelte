<script>
	import Button from "../components/Button.svelte";
    import InputField from "../components/InputField.svelte";
    import { writeToDB } from "../firebaseConfig"
    import App from "../App.svelte"
    // const firebase = require("./util/firebase")
    // writeToDB({"name": "cruzhacks"})

    /*export function getType () {
        let radio = document.getElementsByName('uType')
        radio.forEach(({choice}) => {
            if(choice.checked) return choice.value;
        })
    }*/
    export let uName;
    export let uNumber;
    export let uType;

</script>

<main style="display:flex; flex-direction:column;">
    <!-- App Name -->
    <div class="row" style="margin-bottom: 3em;">
        <h1>Slug Alert</h1>
        <img 
            src="./img/slug.png" 
            alt="Bananan Slug"
            style="width: 4.75em;
                    height: 4.75em">
    </div>

    <!-- user info -->
    <!-- <form on:submit> -->
        <div id="userInfo">
            <slot name="userName"></slot>
            
            <InputField 
                type="tel"
                fieldName="Phone Number"
                fieldID="userPhoneNumber"
                placeholder="(000)-111-2345"
                />
    
            <label for="userType" id="title">User Type</label>
            <div id="userTypesWrapper">
                <div id="userType">
                    <label for="student" id="label">Student</label>
                    <input type="radio" value="student" id="student" name="uType">
                </div>
                <div id="userType">
                    <label for="responder" id="label">Responder</label>
                    <input type="radio" value="responder" id="responder" name="uType">
                </div>
            </div>
        
            <!-- <Button btnTxt="Continue" classType={"outline"} id="logInBtn" on:click={(uName, uNumber, uType) => addUser}/> -->
        </div>
    <!-- </form> -->

    <button type="submit" class="outline" id="continue" on:click>
        Continue
    </button>
    
    <!-- {#if end}
        <App landing={false} rHome={responder} sHome={student} rMap={false}/>
    {/if} -->

</main>

<style>
    main{
        padding: 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 90%;

    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }

    #userInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 70%;
    }

    #title {
        display: flex;
        justify-content: left;
    }

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

    button {
        border-radius: 1.5em;
        width: 100%;

        font-size: 1.3em;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    #continue {
        margin-top: 3em;
    }

</style>