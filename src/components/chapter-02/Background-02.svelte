<div class="absolute w-screen h-screen inset-0 z-30 overflow-hidden">
    <div class="fg-image h-screen bg-cover"/>
</div>
<div class="absolute w-screen h-screen inset-0 z-20 overflow-hidden">
    <div class="bg-image h-screen bg-cover"/>
</div>
<div class="absolute w-screen h-screen inset-0 z-10 overflow-hidden">
    <div class="cloud-image h-screen bg-cover"/>
</div>
<!-- <div class="absolute w-screen h-screen inset-0 z-10 overflow-hidden">
    <img class="absolute bottom-20 w-full" src={wun} alt="Sun" />
</div> -->
<!-- <div class="absolute w-screen h-screen inset-0 z-0 overflow-hidden">
    <img class="absolute w-full h-full" src={bg} alt="bg" />
</div> -->

<style>
    .cloud-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/forest/HG_forest_Vogel_Wolken.png');
      background-repeat: repeat-x;
      animation: slideLeft 300s linear infinite;
    }

    .fg-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/forest/HG_forest_Boden.png');
      background-repeat: repeat-x;
      animation: fgSlideLeft 100s linear infinite;
    }
  
    .bg-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/forest/HG_forest.png');
      background-repeat: repeat-x;
      animation: bgSlideLeft 200s linear infinite;
    }
  
    @keyframes bgSlideLeft {
      from {
        background-position: 0 0;
      }
      to {
        background-position: -4320px 0;
      }
    }

    @keyframes fgSlideLeft {
      from {
        background-position: 0 0;
      }
      to {
        background-position: -4320px 0;
      }
    }

    @keyframes slideLeft {
      from {
        background-position: 0 0;
      }
      to {
        background-position: -4320px 0;
      }
    }
</style>