<script>
    import maskotWireframe from "src/assets/maskot/idle/Maskottchen_idle_0.gif"

    import chapter1 from "src/assets/backgrounds/HG_75-34.png"
    import chapter2 from "src/assets/backgrounds/HG_75-31.png"
    import chapter3 from "src/assets/backgrounds/HG_75-32.png"
    import chapter4 from "src/assets/backgrounds/HG_75-33.png"

    import chapter2locked from "src/assets/backgrounds/HG_75-38.png"
    import chapter3locked from "src/assets/backgrounds/HG_75-35.png"
    import chapter4locked from "src/assets/backgrounds/HG_75-36.png"

    import { chaptersProgress } from "src/lib/stores"

    import { push } from "svelte-spa-router"

    let chapters = [
        {
            id: 0, 
            name: "Kapitel 1",
            image: chapter1,
            isUnlocked: true,
            progress: 0
        },{
            id: 1, 
            name: "Kapitel 2",
            image: chapter2,
            lockImage: chapter2locked,
            isUnlocked: false,
            progress: 0
        },{
            id: 2, 
            name: "Kapitel 3",
            image: chapter3,
            lockImage: chapter3locked,
            isUnlocked: false,
            progress: 0
        },{
            id: 3, 
            name: "Kapitel 4",
            image: chapter4,
            lockImage: chapter4locked,
            isUnlocked: false,
            progress: 0
        },
    ]
    
    chaptersProgress.subscribe(value => {
        let previousProgress = 100
        chapters = chapters.map(chapter => {
            const progress = value[chapter.id] || 0;
            const isUnlocked = previousProgress >= 100 
            previousProgress = progress
            return {
                ...chapter,
                progress,
                isUnlocked 
            }
        })
    })

    let selectedChapter = 0

    const selectChapter = (chapterIndex) => {
        if(chapters[chapterIndex].isUnlocked) {
            selectedChapter = chapterIndex
        }
    }

    let displayLockedHint = false
    
    const clickChapter = (index) => {
        // IMPORTANT //
        /*if(index > 0) {
            chaptersProgress.update((value) => {
                return {...value, [index]: 100 }
            })
        }*/
        push('/chapters/' + (index + 1))
    } 
    
    import { fade } from "svelte/transition"
</script>

<div in:fade={{duration: 500}} class="mt-20 mx-auto w-[70%]"> 
    <ul class="flex gap-16 items-center justify-center">
        {#each chapters as chapter (chapter.id)}
            <li class="w-fit" >
                <button class="flex flex-col items-center gap-4 relative" on:click={() => {
                    if(!chapter.isUnlocked) { displayLockedHint = true }
                    else {
                        displayLockedHint = false
                        if (selectedChapter === chapter.id) { clickChapter(chapter.id) }
                        else { selectChapter(chapter.id)}
                    } 
                }}>                
                    <span id="chapter-title" class:selected={selectedChapter === chapter.id}>{chapter.name}</span>
                    <img class:selected={selectedChapter === chapter.id}  src={chapter.isUnlocked ? chapter.image : chapter.lockImage} alt={chapter.name}/>
                    <span id="chapter-progress" class="text-white absolute bottom-4 text-lg font-semibold" class:selected={selectedChapter === chapter.id}>{chapter.progress.toFixed(0)}%</span>
                </button>
            </li>
        {/each}
    </ul>
    <div class="mt-24 relative">
        <div class="absolute -top-6 -left-6 z-20">
            <img src={maskotWireframe} alt="maskot" class="h-44" />
        </div>
      
        <div class="ml-[52px] z-10 bg-white bg-opacity-75 w-[66%] h-32 py-8 pl-16 pr-8 rounded-xl flex items-center">
            <p class=" text-slate-600 text-lg">
                {#if displayLockedHint}
                Oh, du kannst dieses Kapitel noch nicht bearbeiten. Du musst erst das vorherige abschließen.
                {:else}
                    Wähle dein Kapitel aus, mit dem du fortfahren möchtest.
                {/if}
            </p>
        </div>
    </div>
</div>

<style>
    span#chapter-title {
        @apply font-semibold text-lg whitespace-nowrap;
        color: #3f81bd;
    }

    span#chapter-title.selected {
        @apply font-bold text-2xl;
    }

    span#chapter-progress.selected {
        @apply -bottom-12 text-sky-600 text-2xl font-bold;
    }

    img {
        @apply w-36 rounded-md;
    }

    img.selected {
        @apply w-44;
    }
</style>