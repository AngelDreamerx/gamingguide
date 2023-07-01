<script>
    import ChapterNavbar from "src/components/ChapterNavbar.svelte";
    import Background from "./Background-01.svelte";

</script>

<div class="z-40 flex flex-col h-full relative">
    <ChapterNavbar title="Geschichte des Gaming" titleColorClasses="text-yellow-500" onBack={null} displayBack={false} />
</div>

<!-- TODO: change background -->
<Background/>