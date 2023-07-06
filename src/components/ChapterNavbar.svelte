<script>
    import ggLogo from "src/assets/logo/GG_Logo_klein.png"
    import backButton from "src/assets/icons/zuruck.png"
    import { push } from "svelte-spa-router";

    export let onBack; 
    export let displayBack;
    export let title;
    export let color;
</script>

<div class="absolute top-0 flex w-full items-center justify-between pr-16">
    <button on:click={() => push("/")}>
        {#if displayBack}
            <img src={backButton} alt="back" class="h-16" />
        {:else}
            <img src={ggLogo} alt="logo" class="h-24" />
        {/if}
    </button>
    {#if title && color}
        <h4 class={`text-3xl`} style={`color: ${color}`}>{title}</h4>
    {/if}
</div>