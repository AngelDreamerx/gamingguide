<script>
  import { username } from "./lib/stores"
  import yuWireframe from './assets/yu/wireframe.png'

  let lName = ""
</script>

<main class="h-screen w-screen relative">
  <div class="absolute inset-0 z-0 overflow-hidden">
    <div class="bg-image h-screen bg-cover"/>
    <!-- TODO: import proper foreground -->
    <!-- <div class="fg-image h-screen bg-cover"/> -->
  </div>
  <div class="z-40 flex flex-col mx-24 items-center pt-24 h-full relative">
    <h4 class="text-3xl font-bold text-sky-600 mb-4">Wie heißt du?</h4>
    <input bind:value={lName} class="rounded-xl bg-sky-600/25 text-sky-700 p-4 text-center font-bold text-xl" />
    <div class="flex mt-auto justify-end w-[80%] mb-24 items-end mx-auto">
      <img class="w-32 mr-auto" src={yuWireframe} alt="Yu" />
      <button on:click={() => username.update(() => lName)} class="text-2xl font-bold rounded-3xl py-4 px-6 bg-white text-sky-700">weiter</button>
    </div>
  </div>
</main>

<style>
  .fg-image {
    width: "300%";
    background-image: url('./assets/backgrounds/HG_75_Himmel-1_Boden.png');
    background-repeat: repeat-x;
    animation: bgSlideLeft 30s linear infinite;
  }

  .bg-image {
    width: "300%";
    background-image: url('./assets/backgrounds/himmel-bg.png');
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