<script>
    import { each } from "svelte/internal";
    import { gridStore } from "./GridStore";

    export let convType = "top-left";
    let types = [
        { id: 1, ctype: "top-left", displayName: "Top left" },
        { id: 2, ctype: "top-right", displayName: "Top right" },
        { id: 3, ctype: "bottom-left", displayName: "Bottom left" },
        { id: 4, ctype: "bottom-right", displayName: "Bottom right" },
        { id: 5, ctype: "left-top", displayName: "Left top" },
        { id: 6, ctype: "left-bottom", displayName: "Left bottom" },
        { id: 7, ctype: "right-top", displayName: "Right top" },
        { id: 8, ctype: "right-bottom", displayName: "Right bottom" },
    ];
    export let columns = 1;
    export let rows = 1;
    export let bits = 8;
    export let base = 2;
    export let enable = true;
</script>

<div>
    <div id="columns" class="dpad dmargin">
        columns:
        <input type="number" bind:value={columns} min="1" />
    </div>
    <div id="rows" class="dpad dmargin">
        rows:
        <input type="number" bind:value={rows} min="1" />
    </div>
</div>
<div>
    <div id="bits" class="dpad dmargin">
        bits:
        <input type="number" bind:value={bits} min="1" />
    </div>
</div>
<div>
    <button class="dpad dmargin"
        on:click={() => {
            $gridStore = $gridStore.map((x) => x.map(() => false));
            $gridStore[0][0] = $gridStore[0][0];
        }}>Clear</button
    >
</div>
<div>
    <button class="dpad dmargin"
        on:click={() => {
            enable = !enable;
        }}
        >{#if !enable} Draw {:else} Erase {/if}</button
    >
</div>
<div>
    <select bind:value={base} class="dpad dmargin">
        <option value="2">BIN</option>
        <option value="16">HEX</option>
    </select>
</div>
<div>
    <select bind:value={convType} class="dpad dmargin">
        {#each types as type, i}
            <option value={type.ctype}>{type.displayName}</option>
        {/each}
    </select>
</div>

<style>
    button{
        font-family: "Courier New", Courier, monospace;
    }
    select {
        font-family: "Courier New", Courier, monospace;
    }
    .dpad{
        padding: 3px;
    }
    .dmargin{
        margin: 3px;
    }
</style>
