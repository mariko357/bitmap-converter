<script>
    import { outDraw } from "./draw-handler";
    export let isSet = false;
    export let draw;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<td
    class:selected={isSet}
    use:outDraw
    on:paint={() => {
        isSet = draw ? true : false;
    }}
/>

<style>
    td {
        border-collapse: collapse;
        border: 1px solid black;
        width: 30px;
        height: 30px;
    }
    td:hover {
        background-color: rgb(201, 201, 201);
    }
    .selected {
        background-color: red;
    }
    .selected:hover {
        background-color: rgb(161, 73, 73);
    }
</style>
