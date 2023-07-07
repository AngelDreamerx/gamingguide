<script>
    import maskot from "src/assets/maskot/emotions/Kapitel_2/Maskottchen_emotionen_2_4.gif"
    import achievement from "src/assets/achievements/Achievements-02.png"
</script>

<div class="flex flex-col h-full justify-end items-center pb-8">

    <div class="relative h-full w-full">
        <img src={achievement} alt="achievement" class="h-48 image-basics rotate-[20deg] z-70 left-[49%] translate-y-4" />
        <img src={achievement} alt="achievement" class="h-48 image-basics -rotate-[20deg] z-70 right-[49%] translate-y-4" />
        <img src={achievement} alt="achievement" class="h-60 image-basics z-80 left-[50%] -translate-x-[50%]" />
    </div>

    <div class="w-full flex justify-between items-end relative mb-12 pt-24">
       <img src={maskot} alt="maskot" class="absolute z-50 bottom-0 -left-20 h-52"/>
       <div class="mb-8 z-40 bg-white opacity-75 w-3/4 p-8 pl-32 rounded-xl flex items-center ml-4">
            <!-- <p class="h-full text-slate-600 text-lg overflow-auto"> -->
            <p class="h-full text-slate-600 text-lg">
                Du hast drei Achievements erhalten!
                <br/>
                Dieses Kapitel steht dir nun auch als Zusammenfassung zur Verfügung.
            </p>
       </div> 
    </div>
</div>

<style>
    .image-basics {
        @apply absolute top-24;
    }
</style>