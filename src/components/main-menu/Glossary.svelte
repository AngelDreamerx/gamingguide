<script>
    import ArrowUp from "svelte-icons/fa/FaAngleUp.svelte"
    import ArrowDown from "svelte-icons/fa/FaAngleDown.svelte"
    import Search from "svelte-icons/fa/FaSearch.svelte"
    import yuWireframe from "src/assets/yu/wireframe.png"

    const words = [
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "English"
        },
        {
            title: "EEE",
            description: "test",
            language: "Test"
        },
        {
            title: "FPS",
            description: "(engl. „frames per second“) Steht für die Anzahl der Bilder",
            language: "English"
        }
    ]

    let sortedWords = [...words] // variable to be able to reset to constant words array

    let sortAscending = null
    let searchQuery = ""
    
    let expandedItemIndex = 0

    import { afterUpdate } from 'svelte';

    let filteredWords = [];

    afterUpdate(() => {
        filteredWords = sortedWords.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    
    function toggleSort() {
        if (sortAscending === true) {
            // set back to unsorted after ascending
            sortAscending = null;
            sortedWords = [...words];
        } else if (sortAscending === false) {
            // sort words ascending after descending
            sortAscending = true;
            sortedWords = [...words].sort((a, b) =>
                b.title.toLowerCase().localeCompare(a.title.toLowerCase())
            );
        } else {
            // Sort in ascending order
            sortAscending = false;
            sortedWords = [...words].sort((a, b) =>
              a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );
        }
    }

    function expandItem(index) {
        if(index === expandedItemIndex) {
            expandedItemIndex = -1
        } else {
            expandedItemIndex = index
        }
    }
</script>

<div class="mx-auto w-[70%] min-h-0 overflow-hidden">
    <div class="flex flex-col gap-4 h-full">
        <div class="flex gap-4">
            <div class="relative">
                <div class="absolute left-2 top-[50%] -translate-y-[50%] h-4 w-4 text-sky-600 text-opacity-70">
                    <Search /> 
                </div>
                <input bind:value={searchQuery} placeholder="Suche" class="text-sky-600 w-48 bg-sky-800 bg-opacity-10 pl-8 pr-2 py-1 rounded" />
            </div>

            <button 
                class="text-sky-600 flex gap-2 rounded bg-sky-800 bg-opacity-10 px-2 py-1 w-48 text-left"
                on:click={() => toggleSort()}
            >
                <div class="w-6 h-6 text-sky-500"> 
                    {#if sortAscending === true}
                        <ArrowUp />
                    {:else if sortAscending === false}
                        <ArrowDown /> 
                    {:else}
                        <div class="w-full h-full text-opacity-20 text-slate-700">
                            <ArrowDown />
                        </div>
                    {/if}
                </div>
                Alphabetisch
            </button>
        </div>

        <ul class="flex flex-col gap-4 overflow-auto">
            {#each filteredWords as word, index}
            <li class="flex gap-4">
                <div class="bg-white p-4 rounded w-48">
                    <h6 class="text-3xl text-sky-600 font-semibold">{word.title}</h6>
                    {#if index === expandedItemIndex}
                        <p class="mt-2 text-sm text-slate-500">{word.language}</p>
                    {/if}
                </div>
                <div class="bg-white p-4 rounded w-full flex gap-4">
                    <button class="h-6 w-6 flex-shrink-0 text-sky-500" on:click={() => expandItem(index)}>
                       {#if index === expandedItemIndex} 
                            <ArrowDown/>
                       {:else}
                            <ArrowUp/>
                       {/if} 
                    </button>
                    <div>
                        <p class={`text-md text-slate-500 ${index === expandedItemIndex ? "line-clamp-none" : "line-clamp-1"}`}>
                            {word.description}
                        </p>
                    </div>
                </div>
            </li>
            {/each}
        </ul>
    </div>
    <div class="absolute bottom-6 left-6 z-20 w-[100px]">
        <img src={yuWireframe} alt="yu" class="h-44 w-full" />
    </div>
</div>

<style>
</style>