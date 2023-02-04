<script>
    // Common event modifiers
    // once - makes sure the event can only fire once (removes handeler after action has taken place)
    // preventDefault - prevent the default action (run e.preventDefault)
        // ex: stopping a form from refressing the page when it is submitted
    // self - only fires the event if the clicked element is the target

    // this prop/ var is being set from outside the component
    // can be assigned a default val just incase
    export let message = "This is a Modal";
    export let showModal = false;
    export let isPromo = false;
</script>

<!-- 
    - by using class:(className) you can assign an element a class if a condition is true
    - make sure condition for the if is not surrounded with curly braces like other vars
-->
{#if showModal}
    <!-- by not defining what happens on on click we forward that task to when the component is used -->
    <div class="backdrop" on:click|self>
        <div class="modal" class:promo={isPromo}>
            <p>{message}</p>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal {
        background-color: white;
        color: black;
        padding: 1em;
        border-radius: 1em;
        max-width: 20em;
        margin: 10% auto;
        text-align: center;
    }

    .promo.modal {
        background-color: #ffc8c8;
    }

    #closeToggle {
        border-radius:1.5em; 
        width: 2.25em;
        position: absolute;
        margin-right: 0.5em;
    }

</style>