<script>
	import Button from "./components/Button.svelte";
    import InputField from "./components/InputField.svelte";
    import { writeToDB } from "./firebaseConfig"
    // const firebase = require("./util/firebase")
    // writeToDB({"name": "cruzhacks"})

    let sClick = false;
    let rClick = false
    let marginT= "0.5em";

    const sClicked = () => { 
        sClick = !sClick;
        if(rClick) rClick = !rClick; 
        console.log(sClick)
    };
    const rClicked = (id) => { 
        rClick = !rClick; 
        if(sClick) sClick = !sClick; 
        console.log(id)
    };

    let userBtns = [
        {btnTxt: "Student",
        id:"student", 
        clickEvent:sClicked,
        clicked:sClick},
        {btnTxt: "Responder",
        id:"responder", 
        clickEvent:rClicked,
        clicked:rClick},
    ];

    let uName;
    let uNumber;
    let uType;
    const addUser = (e) => {
        console.log("clicked")
        const formData = new FormData(e.target);

        forEach(ele in formData)
        {
            console.log(ele);
        }; 
    };
    function loadScript(src) {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
    }

    let chooser = 'none';
    const attemptSubmit = () => {
        console.log(chooser)
        if (chooser == 'student') {
            console.log(chooser);
        } else if (chooser == 'responder') {
            loadScript('../src/responderPg.js')
            console.log("THIS SHOULD WORK");
        }
    }

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
    <form>
        <div id="userInfo">
            <InputField 
                type="text"
                fieldName="Name"
                fieldID="userName"
                placeholder="ex: John Doe"
                bind:value = {uName}/>
            <InputField 
                type="tel"
                fieldName="Phone Number"
                fieldID="userPhoneNumber"
                placeholder="(000)-111-2345"
                bind:value = {uNumber}/>
    
            <label for="userType" id="title">User Type</label>
            <div id="userTypesWrapper">
                <div id="userType">
                    <label for="student" id="label">Student</label>
                    <input type="radio" bind:group={chooser} id="student" name="uType" value="student">
                </div>
                <div id="userType">
                    <label for="responder" id="label">Responder</label>
                    <input type="radio" bind:group={chooser} id="responder" name="uType" value="responder">
                </div>
            </div>
        
            <!-- <Button btnTxt="Continue" classType={"outline"} id="logInBtn" on:click={(uName, uNumber, uType) => addUser}/> -->
        </div>
    </form>

    <button type="submit" class="outline" id="continue" on:click={() => attemptSubmit()}>
        Continue
    </button>
    <!-- <div id="btns">
        <LongButton btnTxt="Log In" grad={true} id="logInBtn"/> <br>
        <LongButton btnTxt="Sign In" outline={true} id="signInBtn"/>
    </div> -->

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