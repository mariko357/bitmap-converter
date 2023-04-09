<script>
    import { convertGrid, convertWithEncoding } from "./CalculateOut";
    import { gridStore } from "./GridStore";

    export let base;
    export let rows;
    export let columns;
    export let bits;
    export let direction;

    $: cout = convertWithEncoding(
        convertGrid($gridStore, rows, columns, bits, direction),
        base
    );
</script>

<code>
    {#if cout.length === 0}
        Please set the options right.
    {:else}
        {#each cout as outi, i}
            [{outi}],
            
        {/each}
    {/if}
</code>

<style>
</style>
