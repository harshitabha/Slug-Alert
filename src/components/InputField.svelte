<script>
    export let type;
    export let fieldID;
    export let fieldName;
    export let placeholder = "";
</script>

<label for={fieldID}>{fieldName}</label>
{#if type !== "select"}
    <input type={type} id={fieldID} placeholder={placeholder}>
{:else}
    <select>
        <slot></slot>
    </select>
{/if}

<style>
    
    input, select, option{
        border-radius: 5px;
        background-color: #cdd4d5ab;
        margin: 0.5em 0;
    }
</style>