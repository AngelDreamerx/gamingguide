<script>
  import maskotWireframe from 'src/assets/maskot/walk/Maskottchen_laufen_0.gif'

  import { tutorialDone } from 'src/lib/stores';
  import { onMount, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  // Array of image paths for the slideshow
  const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg',
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
    intervalId = setInterval(nextImage, 2000); // Switch image every 2 seconds
  });

  // Stop the slideshow when the component is destroyed
  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div in:fade={{ duration: 500 }} class="z-40 flex flex-col mx-24 items-center pt-24 h-full relative">
  <div class="flex mt-auto justify-end w-[80%] mb-24 items-end mx-auto relative">
    {#each images as image, index}
      {#if $currentImage === index}
        <img class="h-64 absolute left-[50%] translate-x-[-50%]" src={image} alt="slideshow-image" />
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
