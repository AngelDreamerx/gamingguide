<script>
    import logo from '../assets/logo/GG_Logo_2.png'
    import soundOn from '../assets/icons/ton_an.png'
    import soundOff from '../assets/icons/stumm.png'
    import backButton from '../assets/icons/zuruck.png'

    import { sound, displayGlossary, displayAchievements } from '../lib/stores';
    const toggleSound = () => {
        sound.update((value) => !value)
    }
    const goBack = () => {
        displayAchievements.set(false)
        displayGlossary.set(false)
    }
</script>

<nav class="flex items-center justify-between px-16 py-8">
    {#if $displayGlossary || $displayAchievements}
        <button on:click={() => goBack()}>
            <img class="h-16" src={backButton} alt="back" />
        </button>    
    {:else}
        <img src={logo} alt="logo" class="h-16"/>
    {/if}
    <div class="flex items-center space-x-12">
        <button class="text-sky-600 font-semibold text-md" on:click={() => {
            displayGlossary.set(true) 
            displayAchievements.set(false)
        }}>
            Glossar
        </button>
        <button class="text-sky-600 font-semibold text-md" on:click={() => {
            displayAchievements.set(true)
            displayGlossary.set(false)
        }}>
            Achievements
        </button>
        <div class="flex space-x-8">
            <button on:click={toggleSound}>
                <img class="h-8 w-8" src={$sound ? soundOn : soundOff} alt="sound">
            </button>
            <button class="text-sky-600 font-bold text-3xl">
                ?
            </button>
        </div>
    </div>
</nav>