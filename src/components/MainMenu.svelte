<script>
    import yuWireframe from "../assets/yu/wireframe.png"

    import chapter1 from "../assets/backgrounds/HG_75-34.png"
    import chapter2 from "../assets/backgrounds/HG_75-31.png"
    import chapter3 from "../assets/backgrounds/HG_75-32.png"
    import chapter4 from "../assets/backgrounds/HG_75-33.png"

    import chapter2locked from "../assets/backgrounds/HG_75-35.png"
    import chapter3locked from "../assets/backgrounds/HG_75-36.png"
    import chapter4locked from "../assets/backgrounds/HG_75-37.png"

    import { chaptersDone } from "../lib/stores"

    const chapters = [
        {
            id: 0, 
            name: "Kapitel 1",
            image: chapter1,
            isUnlocked: true,
        },{
            id: 1, 
            name: "Kapitel 2",
            image: chapter2,
            lockImage: chapter2locked,
            isUnlocked: $chaptersDone.includes(0)
        },{
            id: 2, 
            name: "Kapitel 3",
            image: chapter3,
            lockImage: chapter3locked,
            isUnlocked: $chaptersDone.includes(1)
        },{
            id: 3, 
            name: "Kapitel 4",
            image: chapter4,
            lockImage: chapter4locked,
            isUnlocked: $chaptersDone.includes(2)
        },
    ]

    let selectedChapter = 0

    const selectChapter = (chapterIndex) => {
        if(chapters[chapterIndex].isUnlocked) {
            selectedChapter = chapterIndex
        }
    }

    let displayLockedHint = false
</script>

<div class="mt-32 mx-auto w-[70%]"> 
    <ul class="flex gap-16 items-center">
        {#each chapters as chapter}
            <li class="w-fit" >
                <button class="flex flex-col items-center gap-4 relative" on:click={() => {
                    if(!chapter.isUnlocked) { displayLockedHint = true }
                }} on:mouseenter={() => selectChapter(chapter.id)}>                
                    <span id="chapter-title" class:selected={selectedChapter === chapter.id}>{chapter.name}</span>
                    <img class:selected={selectedChapter === chapter.id}  src={chapter.isUnlocked ? chapter.image : chapter.lockImage} alt={chapter.name}/>
                    <span id="chapter-progress" class="text-white absolute bottom-4 text-lg font-semibold" class:selected={selectedChapter === chapter.id}>0%</span>
                </button>
            </li>
        {/each}
    </ul>
    <div class="mt-24 relative">
        <div class="absolute -top-6 -left-6 z-20 w-[100px]">
            <img src={yuWireframe} alt="yu" class="h-44 w-full" />
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
        @apply text-sky-600 font-semibold text-lg whitespace-nowrap;
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