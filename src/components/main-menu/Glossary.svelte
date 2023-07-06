<script>
    import ArrowUp from "svelte-icons/fa/FaCaretUp.svelte"
    import ArrowDown from "svelte-icons/fa/FaCaretDown.svelte"
    import Search from "svelte-icons/fa/FaSearch.svelte"
    import maskotWireframe from "src/assets/maskot/idle/Maskottchen_idle_4.gif"
    import { fade } from 'svelte/transition';

    const words = [
        {
            title: "GG",
            description: "Nach Ende eines Spiels beglückwünschen sich Spieler mit einem fair gemeinten „Good Game“ also „gutes Spiel“",
            language: "Englisch, Akronym"
        },
        {
            title: "Aimbot",
            description: "Aimbot ist eine Software, die es Spielern ermöglicht, ihre Schüsse auf Gegner automatisch auszurichten, um ein besseres Zielvermögen zu erreichen.",
            language: "Englisch, Kofferwort [ˈeɪm ˈbɔt]"
        },
        {
            title: "FPS",
            description: "(engl. „frames per second“) Steht für die Anzahl der Bilder pro Sekunde. Damit ein Spiel flüssig läuft ist das unterste Limit 30 FPS, 60 gelten als optimal.",
            language: "Englisch, Akronym [ˈɛfˈpiˈɛs]"
        },
        {
            title: "Noob",
            description: "Bezeichnet ebenfalls einen unerfahrenen neuen Spieler, im Gegensatz zum Newbie, schwingt hier jedoch eine negative Konnotation mit. Man könnte auch vom ignoranten Neuling sprechen. Auch wenn erfahrende Spieler Anfängerfehler begehen wird Noob benutzt.",
            language: "Englisch, Nomen"
        },
        {
            title: "AFK",
            description: "(engl. „Away from keyboard“) mit AFK ist wie eine Art Abwesenheitsnotiz, mit der ein Spieler seinen Mitspielern zu verstehen gibt, dass er gerade nicht verfügbar oder abwesend ist.",
            language: "Englisch, Akronym [ˈeɪˈɛfˈkeɪ]"
        },
        {
            title: "Cheater",
            description: "Zu Deutsch Betrüger, werden all jene Spieler bezeichnet, die Schwachstellen eines Spiels ausnutzen, um sich einen unfairen Vorteil zu verschaffen. Auch Nutzer von Amibots werden häufig als Cheater bezeichnet.",
            language: "Englisch, Nomen [ˈtʃitɝ]"
        },
        {
            title: "Clutch",
            description: "„Clutch“ bezieht sich auf eine Situation, in der ein Spieler eine entscheidende Aktion durchführt, um ein Spiel im letzten Moment zu gewinnen.",
            language: "Englisch, Ausdruck [ˈkɫətʃ]"
        },
        {
            title: "Git Gud",
            description: "Damit gibt ein Spieler einem anderen zu verstehen, dass er besser werden soll. Das kann durchaus auch verhöhnend gemeint sein. Git Gud kommt von „get good“.",
            language: "Englisch"
        },
        {
            title: "All In",
            description: "„All In“ bedeutet, dass ein Spieler in einem Spiel alle seine verbleibenden Ressourcen auf eine einzige Aktion setzt, in der Hoffnung, den Sieg zu erringen.",
            language: "Englisch, Ausdruck [ˈɔɫ ˈɪn]"
        },
        {
            title: "HF",
            description: "(engl. „have fun“/dt. „hab Spaß“) HF wird meist vor dem Spiel dem Gegner gewünscht. Häufig wird auch HFGL verwendet, was für „have fun, good luck“ steht.",
            language: "Englisch, Akronym"
        },
        {
            title: "NPC",
            description: "(engl. Non player character) dabei handelt es sich um einen Spielercharakter, der nicht durch einen anderen Spieler gesteuert wird, sondern zum Beispiel durch KI gesteuert wird.",
            language: "Englisch, Akronym"
        },
        {
            title: "AOE",
            description: "(engl. „Area of Effect“) AOE bezieht sich auf die Fläche, die von einem Angriff oder Zauber in einem Spiel betroffen ist.",
            language: "Englisch, Akronym [ˈeɪˈoʊˈi]"
        },
        {
            title: "OOM",
            description: "OOM steht für „Out of Mana“ und bedeutet, dass ein Spieler in einem Spiel keine Mana-Punkte mehr hat, um spezielle Fähigkeiten oder Angriffe zu verwenden.",
            language: "Englisch, Akronym"
        },
        {
            title: "DLC",
            description: "(engl. „downloadable content“) hierbei handelt es sich um oftmals kostenpflichtige Zusatzinhalte für ein Spiel.",
            language: "Englisch, Akronym"
        },
        {
            title: "KDA",
            description: "(engl. „Kill/death/assist ratio“) KDA bezieht sich auf das Verhältnis zwischen den Anzahl der Kills, Tode und Assists, die ein Spieler in einem Spiel erzielt hat.",
            language: "Englisch, Akronym"
        },
        {
            title: "APM",
            description: "(engl. „Actions per minute“) APM bezieht sich auf die Anzahl der Aktionen, die ein Spieler pro Minute in einem Spiel ausführt, und gilt als Maß für die Schnelligkeit und Effizienz des Spielers.",
            language: "Englisch, Akronym"
        },
        {
            title: "OP",
            description: "(engl. „overpowered“) Ist ein Gegenstand „overpowered“, also übermächtig, kann er das Gleichgewicht im Spiel stören, z.B. eine Waffe, die allen anderen überlegen ist.",
            language: "Englisch, Akronym"
        },
        {
            title: "DPS",
            description: "(engl. „Damage per second“) DPS bezieht sich auf den durchschnittlichen Schaden, den ein Spieler in einem Spiel pro Sekunde verursacht.",
            language: "Englisch, Akronym"
        },
        {
            title: "L2P",
            description: "(engl. „learn to play“/dt. „lerne zu spielen“) Stellt ein Anfänger (Noob) pausenlos Fragen zum Spiel, bekommt er von anderen Spielern gerne ein L2P als Antwort.",
            language: "Englisch, Akronym"
        },
        {
            title: "Mob",
            description: "So werden beim Zocken Standard-Monster in Spielen bezeichnet.",
            language: "Englisch, Nomen [ˈmɑb]"
        },
        {
            title: "Ragequit",
            description: "„Ragequit“ ist der Ausdruck, der verwendet wird, wenn ein Spieler in einem Spiel vorzeitig aussteigt, weil er wütend oder frustriert ist.",
            language: "Englisch, Ausdruck"
        },
        {
            title: "BM",
            description: "BM steht für „Bad Manners“ und bezieht sich auf schlechtes Benehmen von Spielern in Multiplayer-Spielen.",
            language: "Englisch, Akronym"
        },
        {
            title: "Easter Egg",
            description: "Auf Deutsch Osterei, kann verschiedene Bedeutungen haben. Es kann eine Anspielung/Anekdote im Spiel sein, die sich zum Beispiel auf ein anderes Spiel des Entwicklers bezieht oder es handelt sich um ein verstecktes Feature im Spiel.",
            language: "Englisch, Nomen [ˈistɝ ˈɛɡ]"
        },
        {
            title: "Nerfed",
            description: "Man könnte sagen, es ist das Gegenteil von Buff, anstatt also einen Gegenstand oder eine Figur zu stärken, wird sie absichtlich geschwächt. Oft mit dem Ziel, das Gleichgewicht im Spiel wiederherzustellen.",
            language: "Englisch, Verb"
        },
        {
            title: "FF",
            description: "FF steht für „Forfeit“ und bedeutet, dass ein Spieler ein Spiel aufgibt oder sich zurückzieht.",
            language: "Englisch, Akronym"
        },
        {
            title: "RNG",
            description: "(engl. „random number generator“/ dt. Zufallsgenerator)",
            language: "Englisch, Akronym"
        },
        {
            title: "BRB",
            description: "(engl. „be right back“) Ähnlich wie AFK signalisiert BRB die Abwesenheit eines Spielers bzw. er kommuniziert so, dass er eine sehr kurze Pause macht und gleich wieder da ist.",
            language: "Englisch, Akronym"
        },
        {
            title: "Triple A Game",
            description: "Triple A Games sind hochbudgetierte und aufwändig produzierte Spiele, die von großen und etablierten Entwicklerstudios erstellt werden.",
            language: "Englisch, Akronym"
        },
        {
            title: "Vanilla",
            description: "Bezeichnet in der Gamersprache die Standardversion eines Spiels (ohne Erweiterungen).",
            language: "Englisch, Adjektiv"
        },
        {
            title: "Flamen",
            description: "Flamen bezieht sich auf absichtliche Beleidigungen und Beschimpfungen von Spielern in einem Multiplayer-Spiel.",
            language: "Englisch, Akronym"
        },
        {
            title: "XP",
            description: "(Abkürzung engl. „Experience Points“/ dt. Erfahrungspunkte).",
            language: "Englisch, Adjektiv"
        },
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

<div in:fade={{duration: 500}} class="mx-auto w-[70%] min-h-0 overflow-hidden">
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
                <button class="bg-white p-4 rounded w-full flex gap-4" on:click={() => expandItem(index)}>
                    <div class="h-6 w-6 flex-shrink-0 text-sky-500">
                       {#if index === expandedItemIndex} 
                            <ArrowDown/>
                       {:else}
                            <ArrowUp/>
                       {/if} 
                    </div>
                    <div>
                        <p class={`text-md text-slate-500 ${index === expandedItemIndex ? "line-clamp-none" : "line-clamp-1"}`}>
                            {word.description}
                        </p>
                    </div>
                </button>
            </li>
            {/each}
        </ul>
    </div>
    <div class="absolute bottom-6 left-6 z-20">
        <img src={maskotWireframe} alt="maskot" class="h-44" />
    </div>
</div>

<style>
</style>