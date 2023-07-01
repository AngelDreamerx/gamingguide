<script>
    import ggLogo from "src/assets/logo/GG_Logo_klein.png"
    import backButton from "src/assets/icons/zuruck.png"
    import { push } from "svelte-spa-router";

    export let onBack; 
    export let displayBack;
    export let title;
    export let titleColorClasses
</script>

<div class="flex items-center justify-between pr-16 py-4">
    <button on:click={() => push("/")}>
        <img src={ggLogo} alt="logo" class="h-24" />
    </button>
    {#if title && titleColorClasses}
            <h4 class={`text-3xl ${titleColorClasses}`}>{title}</h4>
    {/if}
    <!-- <img src={backButton} alt="back" class="h-16" /> -->
</div>
