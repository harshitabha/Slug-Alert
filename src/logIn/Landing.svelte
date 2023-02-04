<script>
	import LongButton from "../LongButton.svelte";

</script>

<main style="display:flex; flex-direction:column;">
    <!-- App Name -->
    <div class="row">
        <h1>Slug Alert</h1>
        <img 
            src="../../public/img/slug.png" 
            alt="Bananan Slug"
            style="width: 4.75em;
                    height: 4.5em">
    </div>

    <div id="btns">
        <LongButton btnTxt="Log In" grad={true} id="logInBtn"/> <br>
        <LongButton btnTxt="Sign In" outline={true} id="signInBtn"/>
    </div>

</main>

<style>
    main{
        padding: 2em;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #btns {
        margin-top: 25em;
    }

</style>