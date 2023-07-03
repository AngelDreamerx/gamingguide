<script>
    import ChapterNavbar from "../ChapterNavbar.svelte";
    import Background_03 from "./Background-03.svelte";

    import { fade } from "svelte/transition"
</script>

<div in:fade={{duration: 500}} class="z-40 flex flex-col h-full relative">
    <ChapterNavbar title="" titleColorClasses="" onBack={null} displayBack={false} />
    <div class="flex justify-center items-center p-16 pt-32">
        <h1 class="text-slate-800 text-5xl font-bold">Sorry! Dieses Kapitel ist noch nicht fertig...</h1>
    </div>
</div>

<Background_03 />