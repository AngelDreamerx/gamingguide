<div class="absolute w-screen h-screen inset-0 z-30 overflow-hidden">
    <div class="fg-image h-screen bg-cover"/>
</div>
<div class="absolute w-screen h-screen inset-0 z-10 overflow-hidden">
    <div class="bg-image h-screen bg-cover"/>
</div>
<div class="absolute w-screen h-screen inset-0 z-20 overflow-hidden">
    <div class="cloud-image h-screen bg-cover"/>
</div>

<style>
    .cloud-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/mountain/HG_mountain_Vogel_Wolken.png');
      background-repeat: repeat-x;
      animation: slideLeft 150s linear infinite;
    }

    .fg-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/mountain/HG_mountain_Boden.png');
      background-repeat: repeat-x;
      animation: fgSlideLeft 100s linear infinite;
    }
  
    .bg-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/mountain/HG_mountain.png');
      background-repeat: repeat-x;
      animation: bgSlideLeft 300s linear infinite;
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