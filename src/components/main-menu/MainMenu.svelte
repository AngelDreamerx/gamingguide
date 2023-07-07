<script>
  import MainMenuBackground from "./MainMenuBackground.svelte";
  import NamePickerStep from "./NamePickerStep.svelte";
  import GreetingStep from "./GreetingStep.svelte";
  import TutorialStep from "./TutorialStep.svelte";

  import { username, greetingDone, tutorialDone, displayAchievements, displayGlossary } from 'src/lib/stores'
  import Navbar from "./Navbar.svelte";
  import ChapterSelect from "./ChapterSelect.svelte";
  import Glossary from "./Glossary.svelte";
  import Achievements from "./Achievements.svelte";
  import Footer from "./Footer.svelte";
  import { fade, } from "svelte/transition";

  import { displayImpressum } from 'src/lib/stores';
  import Impressum from 'src/components/Impressum.svelte';

</script>

{#if !$username} 
  <NamePickerStep />
{:else if !$greetingDone} 
  <GreetingStep />
{:else if !$tutorialDone} 
  <TutorialStep />
{:else} 
  <div in:fade={{duration: 500}} class="z-40 flex flex-col h-full relative">
    <Navbar />
    {#if $displayGlossary}
      <Glossary />
    {:else if $displayAchievements}
      <Achievements />
    {:else if $displayImpressum}
      <Impressum />
    {:else}
      <ChapterSelect />
    {/if}
    <Footer />
  </div>
{/if}
<MainMenuBackground />
