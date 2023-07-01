<script>
    import LeftIcon from "svelte-icons/fa/FaChevronLeft.svelte"

    export let clickFn;
    export let colorClasses;
    export let hide; 
</script>

<button on:click={clickFn} class={`h-16 basis-1/12 ${colorClasses} ${hide && "text-transparent opacity-0 cursor-default"}`}>
    <LeftIcon />
</button>