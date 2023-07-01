<script>
    import ChapterNavbar from "src/components/ChapterNavbar.svelte";
    import MainMenuBackground from "src/components/main-menu/MainMenuBackground.svelte";

</script>

<div class="z-40 flex flex-col h-full relative">
    <ChapterNavbar title="Geschichte des Gaming" titleColorClasses="text-yellow-500" onBack={null} displayBack={false} />
</div>

<!-- TODO: change background -->
<MainMenuBackground/>