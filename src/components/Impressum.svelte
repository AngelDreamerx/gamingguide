 <script>
    import maskotWireframe from "src/assets/maskot/idle/Maskottchen_idle_0.gif"
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{duration: 500}} class="mx-auto w-[70%] min-h-0 overflow-hidden">
    <div class="flex flex-col gap-4 h-full">

         <h1 class="text-5xl">Impressum</h1>
    </div>
    <div class="absolute bottom-6 left-6 z-20">
        <img src={maskotWireframe} alt="maskot" class="h-44" />
    </div>
</div>