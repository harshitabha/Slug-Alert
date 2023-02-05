<script>
    export let type;
    export let fieldID;
    export let fieldName;
    export let placeholder = "";
</script>

<label for={fieldID}>{fieldName}</label>
<input type={type} id={fieldID} placeholder={placeholder}>

<style>
    
    input {
        border-radius: 5px;
        background-color: #cdd4d5ab;
        margin: 0.5em 0;
    }
</style>