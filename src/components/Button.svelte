<script>
    export let btnTxt;
    export let btnWidth = "100%";
    export let marginT = "2em";
    export let clicked = false;

    // document.getElementsByTagName("button").style.width = btnWidth;

</script>

<button on:click 
    class="outline"
    class:clicked={clicked}
    style="width: {btnWidth}; margin-top: {marginT};">{btnTxt}</button>

<style>
    button {
        border-radius: 1.5em;
        width: 100%;

        font-size: 1.3em;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    /* .grad {
        background: linear-gradient(#03747E, #06A1AD);
        border: none;
        color: white;
    } */

    .outline {
        background: transparent;
        border-color: #03747E;
        border-width: 2px;
        color: #03747E;
    }

    .clicked.outline{
        background: #009dab;
        border-color: white;
        border-width: 2px;
        color: white;
    }

</style>