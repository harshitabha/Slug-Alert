<script>
    export let landing = true;
    export let sHome = false; // student home
    export let rHome = false; // responder home
    export let rMap = false;

    import {onMount} from 'svelte';
    import Landing from "./screens/Landing.svelte";
    import ResponderPage from "./screens/ResponderPage.svelte";
    import Student from "./screens/Student.svelte";
    import MapHolder from "./screens/mapHolder.svelte";

    const pages = [Landing, ResponderPage, Student, MapHolder]

    let page = 0;

    let pageState = [];

    function toLanding() {
        page = 0;
        pageState[page] = 0
        pageState = pageState
    }
    function toResponder() {
        page = 1;
        pageState[page] = 1
        pageState = pageState
    }
    function toStudent() {
        page = 2;
        pageState[page] = 2
        pageState = pageState
    }
    function toMap() {
        page = 3;
        pageState[page] = 3
        pageState = pageState
    }

</script>

<svelte:component
  this={pages[page]}
  {toResponder}
  {toLanding}
  {toStudent}
  {toMap}
  initialValues={pagesState[page]}
/>

<style>

</style>