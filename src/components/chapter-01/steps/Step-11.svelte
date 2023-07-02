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
        <h4 class="text-3xl font-bold">Xbox</h4>

        <ScrollingTextbox>
            <b>Exklusive Spiele:</b>
            Ähnlich wie bei der PlayStation bietet auch die Xbox exklusive Spiele, darunter Titel wie "Halo", "Forza" und "Gears of War".
            <br/>
            <br/>
            <b>Leistung und Technologie:</b>
            Die aktuelle Generation, die Xbox Series X/ S, bietet leistungsstarke Hardware und innovative Funktionen wie den Xbox Game Pass, der Zugriff auf eine große Bibliothek von Spielen ermöglicht.
            <br/>
            <br/>
            <b>Online-Multiplayer:</b>
            Der Xbox Live-Dienst ermöglicht es Spielern, online gegeneinander anzutreten und mit anderen zu kommunizieren.
        </ScrollingTextbox>
    </HalfTextbox>

    <!-- RIGHT -->
    <HalfPictureContainer>
        <FullPicture imgSrc={yu} label="Xbox Series X" />
    </HalfPictureContainer>

    <!-- BOTTOM-LEFT-CORNER -->
    <img src={yu} alt="yu" class="absolute -left-8 bottom-4 h-48" />
</ContentFlexBox>