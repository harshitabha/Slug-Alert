<script>
	import LongButton from "../components/LongButton.svelte";
    import InputField from "../components/InputField.svelte";

</script>

<main style="display:flex; flex-direction:column;">
    <!-- App Name -->
    <div class="row" style="margin-bottom: 5em;">
        <h1>Slug Alert</h1>
        <img 
            src="../../public/img/slug.png" 
            alt="Bananan Slug"
            style="width: 4.75em;
                    height: 4.5em">
    </div>

    <!-- user info -->
    <div id="userInfo">
        <InputField 
            type="text"
            fieldName="Name"
            fieldID="userName"/>
        <InputField 
            type="text"
            fieldName="Phone Number"
            fieldID="userPhoneNumber"
            placeholder="(000)-111-2345"/>
    
        <LongButton btnTxt="Continue" outline={true} id="logInBtn"/>
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
    }

    #userInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* height: 100%; */
    }

</style>