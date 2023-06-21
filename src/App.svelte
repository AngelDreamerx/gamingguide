<script>
  import { username } from "./lib/stores"
  import yuWireframe from './assets/yu/wireframe.png'
  import background1 from './assets/backgrounds/HG_75_Himmel-1.png'
  import background2 from './assets/backgrounds/HG_75_Himmel-2.png'
  import background3 from './assets/backgrounds/HG_75_Himmel-3.png'
  import foreground1 from './assets/backgrounds/HG_75_Himmel-1_Boden.png'

  let lName = ""
</script>

<!-- <main class="h-screen w-screen bg-gradient-to-t from-sky-600 via-white to-white "> -->
<main class="h-screen w-screen">
  <div class="z-40 flex flex-col mx-24 items-center pt-24 h-full relative">
    <h4 class="text-3xl font-bold text-sky-600 mb-4">Wie heißt du?</h4>
    <input bind:value={lName} class="rounded-xl bg-sky-600/25 text-sky-700 p-4 text-center font-bold text-xl" />
    <div class="flex mt-auto justify-end w-[80%] mb-24 items-end mx-auto">
      <img class="w-32 mr-auto" src={yuWireframe} alt="Yu" />
      <button on:click={() => username.update(() => lName)} class="text-2xl font-bold rounded-3xl py-4 px-6 bg-white text-sky-700">weiter</button>
    </div>
  </div>
  <div id="container max-w-screen overflow-hidden absolute">
    <img src={background1} alt="b3" class="z-0 absolute top-0 sliding-background3" />
    <img src={background2} alt="b2" class="z-0 absolute top-0 sliding-background2" />
    <img src={background3} alt="b1" class="z-0 absolute top-0 sliding-background" />
    <!-- <img src={foreground1} alt="f1" class="z-10 absolute top-0 sliding-foreground" /> -->
  </div>

</main>

<style>
  @keyframes slide {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(300%);
    }
  }

  @keyframes slide2 {
    0% {
      transform: translateX(-100%)
    }
    100% {
      transform: translateX(200%);
    }
  }

  @keyframes slide3 {
    0% {
      transform: translateX(-200%)
    }
    100% {
      transform: translateX(100%);
    }
  }

  .sliding-background {
    animation: slide 20s linear infinite;
  }
  .sliding-background2{
    animation: slide2 20s linear infinite;
  }
  .sliding-background3 {
    animation: slide3 20s linear infinite;
  }
  .sliding-foreground {
    animation: slide 8s linear infinite;
  }
</style>