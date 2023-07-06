<script>
    import maskot from "src/assets/maskot/idle/Maskottchen_idle_4.gif"
    import ContentFlexBox from "src/components/basic-layout/ContentFlexBox.svelte";
    import HalfPictureContainer from "src/components/basic-layout/HalfPictureContainer.svelte";
    import HalfTextbox from "src/components/basic-layout/HalfTextbox.svelte";
    import ScrollingTextbox from "src/components/basic-layout/ScrollingTextbox.svelte";
    import PictureWithLabel from "src/components/basic-layout/PictureWithLabel.svelte";

    export let image1;
    export let image1Label;
    export let image2;
    export let image2Label;

    export let textHeader;
</script>

<ContentFlexBox>
    <!-- LEFT -->
    <HalfTextbox>
        <!-- Header -->
        {#if textHeader}
            <h4 class="text-3xl font-bold">{textHeader}</h4>
        {/if}

        <ScrollingTextbox>
            <slot/>
        </ScrollingTextbox>
    </HalfTextbox>

    <!-- RIGHT -->
    <HalfPictureContainer>
        {#if image1}
            <PictureWithLabel imgSrc={image1} label={image1Label} />
        {/if}
        {#if image2}
            <PictureWithLabel imgSrc={image2} label={image2Label} />
        {/if}
    </HalfPictureContainer>

    <!-- BOTTOM-LEFT-CORNER -->
    <img src={maskot} alt="maskot" class="absolute -left-16 bottom-4 h-52" />
</ContentFlexBox>