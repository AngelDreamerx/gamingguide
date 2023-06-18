<script>
  import { username } from "./lib/stores"

  let lName = ""
</script>

<main class="h-screen w-screen bg-gradient-to-t from-sky-600 via-white to-white ">
  <div class="flex flex-col mx-24 items-center pt-24 h-full">
    <h4 class="text-3xl font-bold text-sky-600 mb-4">Wie heißt du?</h4>
    <input bind:value={lName} class="rounded bg-sky-600/25 text-sky-700 p-2 text-center font-semibold" />
    <button on:click={() => username.update(() => lName)} class="mt-auto mb-24 self-end rounded-xl py-1 px-2 bg-white text-sky-700">weiter</button>
  </div>
</main>