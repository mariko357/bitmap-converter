<script>
    import Grid from "./lib/Grid.svelte";
    import Options from "./lib/Options.svelte";
    import Output from "./lib/Output.svelte";
    let columns = 1;
    let rows = 1;
    let option = "";
    let bits = 8;
    let base = 2;
    let enable;
</script>

<div class="parent-div">
    <div class="grid-div">
        <Grid c={columns} r={rows} bind:enable />
    </div>
    <div class="options-div">
        <Options
            bind:columns
            bind:rows
            bind:convType={option}
            bind:base
            bind:bits
            bind:enable
        />
    </div>
    <div class="options-div">
        <Output
            bind:direction={option}
            bind:columns
            bind:rows
            bind:base
            bind:bits
        />
    </div>
</div>

<style>
    .parent-div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    /* CSS for the options div */
    .options-div {
        order: 1;
        flex: 0 0 auto;
        width: 100%;
        margin: 10px;
        border: 1px solid black;
        padding: 10px;
    }

    /* CSS for the grid div */
    .grid-div {
        order: 2;
        flex: 0 0 auto;
        width: 100%;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    * {
        font-family: "Courier New", Courier, monospace;
    }

    /* CSS for responsive design */
    @media only screen and (min-width: 384px) {
        .grid-div {
            order: 2;
            flex: 2 0 50%;
            width: auto;
        }

        /* Adjust the order for desktop screens */
        .options-div {
            order: 1;
            flex: 1 0 30%;
        }

    }
</style>
