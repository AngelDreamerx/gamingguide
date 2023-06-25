<script>
  import MainMenuBackground from "./components/MainMenuBackground.svelte";
  import NamePickerStep from "./components/NamePickerStep.svelte";
  import GreetingStep from "./components/GreetingStep.svelte";

  import { username, greetingDone } from './lib/stores'
  import Navbar from "./components/Navbar.svelte";
  import MainMenu from "./components/MainMenu.svelte";
</script>

<main class="h-screen w-screen relative">
  
  {#if !$username} 
    <NamePickerStep />
  {:else if !$greetingDone} 
    <GreetingStep />
  {:else} 
    <div class="z-40 flex flex-col h-full relative">
      <Navbar />
      <MainMenu />
    </div>
  {/if}
  <MainMenuBackground />
</main>
