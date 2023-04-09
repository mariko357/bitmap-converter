<script>
    import ClickBox from "./ClickBox.svelte";
    import { disableDrag } from "./disableDrag";
    import { gridStore } from "./GridStore";
    export let r = 1;
    export let c = 1;
    export let enable = true;
    $: $gridStore = Array.from({ length: r }, () =>
        Array.from({ length: c }, () => false)
    );
</script>


<table use:disableDrag>
    {#each Array(r) as i, i}
        <tr>
            {#each Array(c) as j, j}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <ClickBox draw={enable} bind:isSet={$gridStore[i][j]} />
            {/each}
        </tr>
    {/each}
</table>

<style>
    table {
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>
