<script>
    import maskot from "src/assets/maskot/idle/Maskottchen_idle_1.gif"
    import ContentFlexBox from "src/components/basic-layout/ContentFlexBox.svelte";
    import FullPicture from "src/components/basic-layout/FullPicture.svelte";
    import HalfPictureContainer from "src/components/basic-layout/HalfPictureContainer.svelte";
    import HalfTextbox from "src/components/basic-layout/HalfTextbox.svelte";
    import ScrollingTextbox from "src/components/basic-layout/ScrollingTextbox.svelte";

</script>

<ContentFlexBox>
    <!-- LEFT -->
    <HalfTextbox>
        <!-- Header -->
        <h4 class="text-3xl font-bold">Die Geschichte der Videospiele</h4>

        <ScrollingTextbox>
            Mit dem Aufkommen der Heimkonsolen wie dem Atari 2600 in den 1970er und 1980er Jahren begann die Ära der Videospielrevolution. Plötzlich konnte man Spiele direkt von zuhause aus spielen und das Interesse an Videospielen verbreitete sich in der ganzen Welt.
        </ScrollingTextbox>
    </HalfTextbox>

    <!-- RIGHT -->
    <HalfPictureContainer>
        <FullPicture imgSrc={maskot} label="Test label" />
    </HalfPictureContainer>

    <!-- BOTTOM-LEFT-CORNER -->
    <img src={maskot} alt="maskot" class="absolute -left-16 bottom-4 h-52" />
</ContentFlexBox>