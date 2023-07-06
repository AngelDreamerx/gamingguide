<script>
    import RightIcon from "svelte-icons/fa/FaChevronRight.svelte"

    export let clickFn;
    export let color;
</script>

<button on:click={clickFn} class={`h-16 basis-1/12`} style={`color: ${color}`}>
    <RightIcon />
</button>