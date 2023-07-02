<script>
    import { username } from "src/lib/stores"
    import maskotWireframe from 'src/assets/maskot/idle/Maskottchen_idle_4.gif'

    let lName = ""
</script>

<div class="z-40 flex flex-col mx-24 items-center pt-24 h-full relative">
    <h4 class="text-3xl font-bold text-sky-600 mb-4">Wie heißt du?</h4>
    <input bind:value={lName} class="rounded-xl bg-sky-600/25 text-sky-700 p-4 text-center font-bold text-xl" />
    <div class="flex mt-auto justify-end w-[80%] mb-24 items-end mx-auto">
      <img class="h-64 mr-auto" src={maskotWireframe} alt="maskot" />
      <button on:click={() => username.update(() => lName)} class="text-2xl font-bold rounded-3xl py-4 px-6 bg-white text-sky-700">weiter</button>
    </div>
</div>

 