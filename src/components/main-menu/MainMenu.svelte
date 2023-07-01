<script>
  import MainMenuBackground from "./MainMenuBackground.svelte";
  import NamePickerStep from "./NamePickerStep.svelte";
  import GreetingStep from "./GreetingStep.svelte";

  import { username, greetingDone, displayAchievements, displayGlossary } from 'src/lib/stores'
  import Navbar from "./Navbar.svelte";
  import ChapterSelect from "./ChapterSelect.svelte";
  import Glossary from "./Glossary.svelte";
  import Achievements from "./Achievements.svelte";
  import Footer from "./Footer.svelte";
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
