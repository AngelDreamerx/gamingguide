<script>
    import logo from 'src/assets/logo/GG_Logo_2.png'
    import soundOn from 'src/assets/icons/ton_an.png'
    import soundOff from 'src/assets/icons/stumm.png'
    import backButton from 'src/assets/icons/zuruck.png'

    import { sound, displayGlossary, displayAchievements, displayImpressum } from 'src/lib/stores';
    const toggleSound = () => {
        sound.update((value) => !value)
    }
    const goBack = () => {
        displayAchievements.set(false)
        displayGlossary.set(false)
        displayImpressum.set(false) // Set displayImpressum to false when going back
    }
</script>

<nav class="flex items-center justify-between px-16 py-8">
    {#if $displayGlossary || $displayAchievements || $displayImpressum}
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
            displayImpressum.set(false) // Set displayImpressum to false when Glossary is clicked
        }}>
            Glossar
        </button>
        <button class="text-sky-600 font-semibold text-md" on:click={() => {
            displayAchievements.set(true)
            displayGlossary.set(false)
            displayImpressum.set(false) // Set displayImpressum to false when Achievements is clicked
        }}>
            Achievements
        </button>
        <button class="text-sky-600 font-semibold text-md" on:click={() => {
            displayImpressum.set(true)
            displayGlossary.set(false)
            displayAchievements.set(false)
        }}>
            Impressum
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