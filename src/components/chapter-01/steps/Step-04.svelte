<script>
    import maskot from "src/assets/maskot/idle/Maskottchen_idle_1.gif"
    import ContentFlexBox from "src/components/basic-layout/ContentFlexBox.svelte";
    import FullPicture from "src/components/basic-layout/FullPicture.svelte";

    import Zeitstrahl from "src/assets/pictures/Kapitel_1_22.png";
</script>

<ContentFlexBox>
    <!-- FULL BOX WITH SEMI TRANSPARENT BACKGROUND -->
    <div class="h-full w-full overflow-hidden min-h-0 rounded-2xl bg-white bg-opacity-60 p-8 flex flex-col gap-8">
        <h4 class="text-3xl font-bold">Die Geschichte der Videospiele</h4>

        <FullPicture imgSrc={Zeitstrahl} label=""/>
    </div>

    <!-- BOTTOM-LEFT-CORNER -->
    <img src={maskot} alt="maskot" class="absolute -left-16 bottom-4 h-52" />
</ContentFlexBox>