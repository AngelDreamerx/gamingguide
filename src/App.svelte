<script>
  import MainMenuBackground from "./components/MainMenuBackground.svelte";
  import NamePickerStep from "./components/NamePickerStep.svelte";
  import GreetingStep from "./components/GreetingStep.svelte";

  import { username, greetingDone, displayAchievements, displayGlossary } from './lib/stores'
  import Navbar from "./components/Navbar.svelte";
  import ChapterSelect from "./components/ChapterSelect.svelte";
  import Glossary from "./components/Glossary.svelte";
  import Achievements from "./components/Achievements.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<main class="h-screen w-screen relative">
  
  {#if !$username} 
    <NamePickerStep />
  {:else if !$greetingDone} 
    <GreetingStep />
  {:else} 
    <div class="z-40 flex flex-col h-full relative">
      <Navbar />
      {#if $displayGlossary}
        <Glossary />
      {:else if $displayAchievements}
        <Achievements />
      {:else}
        <ChapterSelect />
      {/if}
      <Footer />
    </div>
  {/if}
  <MainMenuBackground />
</main>
