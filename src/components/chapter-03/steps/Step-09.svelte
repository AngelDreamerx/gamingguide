<script>
    import maskot from "src/assets/maskot/idle/Maskottchen_idle_3.gif"
    import ContentFlexBox from "src/components/basic-layout/ContentFlexBox.svelte";
    import FullPicture from "src/components/basic-layout/FullPicture.svelte";
    import HalfPictureContainer from "src/components/basic-layout/HalfPictureContainer.svelte";
    import HalfTextbox from "src/components/basic-layout/HalfTextbox.svelte";
    import ScrollingTextbox from "src/components/basic-layout/ScrollingTextbox.svelte";
    import Picture1 from"src/assets/pictures/USK.png";

    //import font from "src/

</script>

<ContentFlexBox>
    <!-- LEFT -->
    <HalfTextbox>
        <!-- Header -->
        <h4 class="text-3xl font-bold">Die Geschichte der Videospiele</h4>

        <ScrollingTextbox>
            Viele Spiele haben Altersbeschränkungen, die darauf hinweisen, für welche Altersgruppe das Spiel geeignet ist.
            <br><br>
            Es ist wichtig, diese Beschränkungen zu respektieren und sicherzustellen, dass dein Kind Spiele spielt, die ihrem Alter und Entwicklungsstand angemessen sind. Altersbeschränkungen dienen dazu, den Inhalt zu regulieren und sicherzustellen, dass dein Kind keine Inhalte sieht oder erlebt, die für dich nicht geeignet sind.
        </ScrollingTextbox>
    </HalfTextbox>

    <!-- RIGHT -->
    <HalfPictureContainer>
        <FullPicture imgSrc={Picture1} label="" />
    </HalfPictureContainer>

    <!-- BOTTOM-LEFT-CORNER -->
    <img src={maskot} alt="maskot" class="absolute -left-16 bottom-4 h-52" />
</ContentFlexBox>