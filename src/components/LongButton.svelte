<script>
    export let btnTxt;
    export let grad;
    export let outline;

</script>

<button on:click class:grad={grad} class:outline={outline}>{btnTxt}</button>

<style>
    button {
        width: 70%;
        border-radius: 1.5em;
        width: 100%;
        margin-top: 2em;

        font-size: 1.3em;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    .grad {
        background: linear-gradient(#03747E, #06A1AD);
        border: none;
        color: white;
    }

    .outline {
        background: transparent;
        border-color: #03747E;
        border-width: 2px;
        color: #03747E;
    }

</style>