<script>
    import ArrowUp from "svelte-icons/fa/FaAngleUp.svelte"
    import ArrowDown from "svelte-icons/fa/FaAngleDown.svelte"
    import Search from "svelte-icons/fa/FaSearch.svelte"

    const words = [
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "FPS",
            description: "(engl. „frames per second“) Steht für die Anzahl der Bilder",
            language: "English"
        }
    ]

    let isSorted = 0 // 0 is not sorted, 1 is sorted down, 2 is sorted up
    const toggleSort = () => {
        if(isSorted === 0) {
            isSorted = 1
        } else if(isSorted === 1) {
            isSorted = 2
        } else {
            isSorted = 0
        }
    }
    
    let search = ""
    
    // TODO: broken
    const getFilteredAndSortedWords = () => {
        let newWords = [...words]
        if(isSorted === 1) {
            newWords = newWords.sort((a, b) => a.title - b.title)
        } else if (isSorted === 2) {
            newWords = newWords.sort((a, b) => b.title - a.title)
        }
        if(search) {
            newWords = newWords.filter((value) => value === search)
        }
        return newWords
    }
</script>

<div class="mx-auto w-[70%]">
    <ul class="flex flex-col gap-4">
        <li class="flex gap-4">
            <div class="relative">
                <div class="absolute left-2 top-[50%] -translate-y-[50%] h-4 w-4 text-sky-600 text-opacity-70">
                    <Search /> 
                </div>
                <input bind:value={search} placeholder="Suche" class="text-sky-600 w-48 bg-sky-800 bg-opacity-10 pl-8 pr-2 py-1 rounded" />
            </div>

            <button 
                class="text-sky-600 flex gap-2 rounded bg-sky-800 bg-opacity-10 px-2 py-1 w-48 text-left"
                on:click={() => toggleSort()}
            >
                <div class="w-6 h-6 text-sky-500"> 
                    {#if isSorted === 0}
                        <div class="w-full h-full text-opacity-20 text-slate-700">
                            <ArrowDown />
                        </div>
                    {:else if isSorted === 1}
                        <ArrowDown /> 
                    {:else}
                        <ArrowUp />
                    {/if}
                </div>
                Alphabetisch
            </button>
        </li>

        {#each getFilteredAndSortedWords() as word}
        <li class="flex gap-4">
            <div class="bg-white p-4 rounded w-48">
                <h6 class="text-3xl text-sky-600 font-semibold">{word.title}</h6>
                <p class="mt-2 text-sm text-slate-500">{word.language}</p>
            </div>
            <div class="bg-white p-4 rounded w-full">
                <p class="text-sm text-slate-500">
                    {word.description}
                </p>
            </div>
        </li>
        {/each}
    </ul>
</div>