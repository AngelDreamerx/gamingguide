<script>
    import yu from "src/assets/yu/wireframe.png"
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
        <h4 class="text-3xl font-bold">PlayStation</h4>

        <ScrollingTextbox>
            <b>Exklusive Spiele:</b>
            Die PlayStation bietet eine Vielzahl exklusiver Spiele, die nur auf dieser Konsole erhältlich sind. Dazu gehören beliebte Titel wie "The Last of Us", "God of War" und "Uncharted".
            <br/>
            <br/>
            <b>Starke Leistung:</b>
            Die aktuelle Generation, die PlayStation 5 (PS5), verfügt über leistungsstarke Hardware, die beeindruckende Grafiken und flüssige Gameplay-Erlebnisse ermöglicht.
            <br/>
            <br/>
            <b>Spielercommunity:</b>
            Die PlayStation hat eine große und aktive Spielercommunity, mit der dein Kind online interagieren und gemeinsam spielen kann.
        </ScrollingTextbox>
    </HalfTextbox>

    <!-- RIGHT -->
    <HalfPictureContainer>
        <FullPicture imgSrc={yu} label="Playstation 5" />
    </HalfPictureContainer>

    <!-- BOTTOM-LEFT-CORNER -->
    <img src={yu} alt="yu" class="absolute -left-8 bottom-4 h-48" />
</ContentFlexBox>