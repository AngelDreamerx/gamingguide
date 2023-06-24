<div class="absolute w-screen h-screen inset-0 z-0 overflow-hidden">
    <div class=" bg-image h-screen bg-cover"/>
    <!-- TODO: import proper foreground -->
    <!-- <div class="fg-image h-screen bg-cover"/> -->
</div>


<style>
    .fg-image {
      width: 300%;
      background-image: url('../assets/backgrounds/HG_75_Himmel-1_Boden.png');
      background-repeat: repeat-x;
      animation: bgSlideLeft 30s linear infinite;
    }
  
    .bg-image {
      width: 300%;
      background-image: url('../assets/backgrounds/himmel-bg.png');
      background-repeat: repeat-x;
      animation: bgSlideLeft 120s linear infinite;
    }
  
    @keyframes bgSlideLeft {
      from {
        background-position: 0 0;
      }
      to {
        background-position: -12800px 0;
      }
    }
</style>