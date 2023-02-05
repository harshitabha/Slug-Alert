<script>
	import Button from "./components/Button.svelte";
    import InputField from "./components/InputField.svelte";

    let sClick = false;
    let marginT= "0.5em";

    const sClicked = (id) => { 
        sClick = !sClick;
        if(rClick) rClick = !rClick; 
        console.log(id)
    };
    let rClick = false
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

</script>

<main style="display:flex; flex-direction:column;">
    <!-- App Name -->
    <div class="row">
        <h1>Slug Alert</h1>
        <img 
            src="./img/slug.png" 
            alt="Bananan Slug"
            style="width: 4.75em;
                    height: 4.75em">
    </div>

    <!-- user info -->
    <div id="userInfo">
        <InputField 
            type="text"
            fieldName="Name"
            fieldID="userName"
            placeholder="ex: John Doe"/>
        <InputField 
            type="text"
            fieldName="Phone Number"
            fieldID="userPhoneNumber"
            placeholder="(000)-111-2345"/>

        <label for="userType">User Type</label>
        <div class="row" style="justify-content: left; gap: 2em">
            {#each userBtns as btn (btn.id)}
                <Button 
                    btnTxt={btn.btnTxt}
                    clicked={btn.clicked}
                    on:click={() => btn.clickEvent(btn.id)}
                    {marginT}/>

            {/each}
        </div>
    
        <Button btnTxt="Continue" classType={"outline"} id="logInBtn"/>
    </div>
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
        height: 100%;

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

</style>