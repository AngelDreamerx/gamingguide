<script>
    import card1 from "src/assets/achievements/Achievements-01.png"
    import card2 from "src/assets/achievements/Achievements-02.png"
    import card3 from "src/assets/achievements/Achievements-03.png"
    import card4 from "src/assets/achievements/Achievements-04.png"
    import backButton from 'src/assets/icons/zuruck.png'
    import maskotWireframe from "src/assets/maskot/idle/Maskottchen_idle_4.gif"
    
    import { chaptersProgress } from "src/lib/stores"

    let achievements = [
        {
            id: 0,
            title: "Kapitel 1",
            icon: card1,
            cards: [
                {
                    title: "Historischer Überblick",
                    description: "Der GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer GamingguideDer Gamingguide",
                    isUnlocked: false,
                }, 
                {
                    title: "Historischer Überblick2",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                },
                {
                    title: "Überblick2",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                },
            ],
        },
        {
            id: 1,
            title: "Kapitel 2",
            icon: card2,
            cards: [
                {
                    title: "Historischer Überblick",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                }, 
                {
                    title: "Historischer Überblick",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                },
            ],
        },
        {
            id: 2,
            title: "Kapitel 3",
            icon: card3,
            cards: [
                {
                    title: "Historischer Überblick",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                }, 
                {
                    title: "Historischer Überblick",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                },
            ],
        },
        {
            id: 3,
            title: "Kapitel 4",
            icon: card4,
            cards: [
                {
                    title: "Historischer Überblick",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                }, 
                {
                    title: "Historischer Überblick",
                    description: "Der Gamingguide",
                    isUnlocked: false,
                },
            ],
        },
    ]

    chaptersProgress.subscribe(value => {
        let previousProgress = 100
        achievements = achievements.map(chapter => {
            const progress = value[chapter.id] || 0;
            const achievementCards = chapter.cards.map((card) => {
                return {...card, isUnlocked: progress === 100}
            })
            return {
                ...chapter,
                cards: achievementCards
            }
        })
    })
    
    let selectedChapter = 0
    let openedCard = null
    
    function openCard(index) {
        openedCard = index
    }
    function closeCard() {
        openedCard = null
    }

    function selectChapter(index) {
        selectedChapter = index
        closeCard()
    }
</script>


<div class="mx-auto w-[70%] flex items-stretch flex-grow mb-32 min-h-0 overflow-hidden">
    <ul class="flex flex-col gap-4">
        {#each achievements as chapter, index (chapter.id)}
        <li class="flex items-center">
            <button on:click={() => selectChapter(index)} class="text-2xl text-sky-600 font-black p-4 bg-sky-800 bg-opacity-10 rounded-md">
                {chapter.title}
            </button>
            {#if selectedChapter === index}
                <div class="ml-4 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-sky-800 border-opacity-10" />
            {/if}
        </li>
        {/each}
    </ul>
    <div class="flex-1 bg-sky-800 bg-opacity-10">
        {#if openedCard !== null}
            <div class="flex justify-center py-2 items-stretch h-full min-h-0 overflow-auto">
                <div class="basis-3/12 flex justify-center items-start">
                    <button on:click={() => closeCard()}>
                        <img class="w-10" src={backButton} alt="back" />
                    </button>
                </div>
                <div class="p-4 bg-yellow-50 border-orange-200 border-8 rounded-3xl mr-auto basis-6/12 min-h-0 overflow-auto">
                    <h6 class="text-md font-bold text-slate-600 mb-4">
                        {achievements[selectedChapter].cards[openedCard].title}
                    </h6>
                    <p class="text-slate-600">
                        {achievements[selectedChapter].cards[openedCard].description}
                    </p>
                </div>
            </div>
        {:else}
            <div class="flex flex-wrap h-full p-4 justify-start">
                {#each achievements[selectedChapter].cards as card, index}
                    {#if card.isUnlocked}
                        <button on:click={() => openCard(index)} class="basis-1/2 flex flex-col items-center gap-2">
                            <img class="h-32" src={achievements[selectedChapter].icon} alt="achievement" />
                            <span class="text-sky-600 font-medium">{card.title}</span>
                        </button>
                    {/if}
                {/each}
            </div>
        {/if}
    </div>
    <div class="absolute bottom-6 left-6 z-20 w-[100px]">
        <img src={maskotWireframe} alt="maskot" class="h-44 w-full" />
    </div>
</div>