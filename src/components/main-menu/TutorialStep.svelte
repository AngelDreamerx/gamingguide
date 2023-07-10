<script>
  import maskotWireframe from 'src/assets/maskot/walk/Maskottchen_laufen_0.gif'
  import { tutorialDone } from 'src/lib/stores';
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from "svelte/transition";

  import Tutorial_1 from "src/assets/pictures/Tutorial_1.png";
  import Tutorial_2 from "src/assets/pictures/Tutorial_2.png";
  import Tutorial_3 from "src/assets/pictures/Tutorial_3.png";
  import Tutorial_4 from "src/assets/pictures/Tutorial_4.png";
  import Tutorial_5 from "src/assets/pictures/Tutorial_5.png";
  import Tutorial_6 from "src/assets/pictures/Tutorial_6.png";

  // Array of image variables for the slideshow
  const images = [
    Tutorial_1,
    Tutorial_2,
    Tutorial_3,
    Tutorial_4,
    Tutorial_5,
    Tutorial_6,
  ];

  // Writable store to hold the current image index
  const currentImage = writable(0);

  let intervalId; // ID for the interval timer

  // Function to switch to the next image
  function nextImage() {
    currentImage.update((value) => (value + 1) % images.length);
  }

  // Start the slideshow when the component is mounted
  onMount(() => {
    intervalId = setInterval(nextImage, 3000); // Switch image every 3 seconds
  });

  // Stop the slideshow when the component is destroyed
  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div in:fade={{ duration: 500 }} class="z-40 flex flex-col mx-24 items-center pt-24 relative">
  <div class="flex mt-auto justify-end gap-5 w-full mb-24 items-end mx-auto relative">
    {#each images as image, index}
      {#if $currentImage === index}
        <img class="w-80 flex-1 shadow-xl rounded-2xl" src={image} alt="Tutorial" />
      {/if}
    {/each}
    <button
      on:click={() => tutorialDone.update(() => 'done')}
      class="text-2xl font-bold rounded-3xl py-4 px-6 bg-white text-sky-700"
    >
      Weiter
    </button>
  </div>
</div>
