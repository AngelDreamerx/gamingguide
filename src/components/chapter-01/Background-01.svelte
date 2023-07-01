<script>
  import sun from "src/assets/backgrounds/desert/HG_desert_Sonne.png"
  import bg from "src/assets/backgrounds/desert/HG_desert_Hintergrund.png"
</script>

<div class="absolute w-screen h-screen inset-0 z-30 overflow-hidden">
    <div class="fg-image h-screen bg-cover"/>
</div>
<div class="absolute w-screen h-screen inset-0 z-20 overflow-hidden">
    <div class="bg-image h-screen bg-cover"/>
</div>
<div class="absolute w-screen h-screen inset-0 z-10 overflow-hidden">
    <img class="absolute bottom-20 w-full" src={sun} alt="Sun" />
</div>
<div class="absolute w-screen h-screen inset-0 z-0 overflow-hidden">
    <img class="absolute w-full h-full" src={bg} alt="bg" />
</div>

<style>
    .fg-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/desert/HG_desert_Boden.png');
      background-repeat: repeat-x;
      animation: fgSlideRight 100s linear infinite;
    }
  
    .bg-image {
      width: 200%;
      background-image: url('src/assets/backgrounds/desert/HG_desert.png');
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

    @keyframes fgSlideRight {
      from {
        background-position: 0 0;
      }
      to {
        background-position: -4320px 0;
      }
    }
</style>