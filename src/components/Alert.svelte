<script>
    export let isActive = false;
    export let modalID;
</script>

{#if isActive}
    <main id="background">
        <div class = "alert" id={modalID}>
            <slot></slot>
        </div>
    </main>
{:else}
    <main id="background"
{/if}


<style>
    #background {
        z-index: 10;
        background-color: rgba(156, 156, 156);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        height: 100%;
        width: 100%;
    }

    .alert {
        background-color: white;
        /* width: 80%; */
    }
</style>