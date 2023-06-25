<script>
    import logo from '../assets/logo/GG_Logo_2.png'
    import soundOn from '../assets/icons/ton_an.png'
    import soundOff from '../assets/icons/stumm.png'

    import { sound } from '../lib/stores';
    const toggleSound = () => {
        sound.update((value) => !value)
    }
</script>

<nav class="flex items-center justify-between px-16 py-8">
    <img src={logo} alt="logo" class="h-16"/>
    <div class="flex items-center space-x-12">
        <button class="text-sky-600 font-semibold text-md">
            Glossar
        </button>
        <button class="text-sky-600 font-semibold text-md">
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