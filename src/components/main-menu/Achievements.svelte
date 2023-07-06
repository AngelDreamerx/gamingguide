<script>
  import card1 from "src/assets/achievements/Achievements-01.png"
  import card2 from "src/assets/achievements/Achievements-02.png"
  import card3 from "src/assets/achievements/Achievements-03.png"
  import card4 from "src/assets/achievements/Achievements-04.png"
  import backButton from 'src/assets/icons/zuruck.png'
  import maskotWireframe from "src/assets/maskot/idle/Maskottchen_idle_4.gif"

  import { chaptersProgress } from "src/lib/stores"

  let achievements = [
    {
      id: 0,
      title: "Kapitel 1",
      icon: card1,
      cards: [
        {
          title: "Historischer Überblick",
          description: "Die Geschichte der Videospiele reicht bis in die 1950er Jahre zurück und erlebte eine Revolution durch Heimkonsolen wie den Atari 2600 in den 1970er und 1980er Jahren. Die Gaming-Branche hat sich seitdem stark weiterentwickelt, mit realistischer Grafik und einer weltweiten Spielerbasis. Mobile Gaming und Cloud Gaming gewinnen zunehmend an Popularität.",
          isUnlocked: false,
        },
        {
          title: "Die Gaming Branche",
          description: "Die Gaming-Branche hat einen erheblichen Einfluss auf Kultur und Gesellschaft, wobei neue Berufe und Karrieremöglichkeiten wie professionelle Spieler und Gaming-Streamer entstanden sind. Sie treibt auch die Entwicklung neuer Technologien wie Virtual Reality und Augmented Reality voran. Online-Gaming ermöglicht weltweite Interaktion und Kommunikation, während die Branche eine enorme wirtschaftliche Bedeutung hat.",
          isUnlocked: false,
        },
        {
          title: "Die Konsolen Wahl",
          description: "Bei der Wahl der richtigen Konsole sind persönliche Vorlieben, das Budget und die gewünschten Spiele entscheidend. Die PlayStation bietet exklusive Spiele, starke Leistung und eine große Spielercommunity. Die Xbox hat ebenfalls exklusive Spiele, Leistung und Technologie sowie Online-Multiplayer-Funktionen. Nintendo zeichnet sich durch Familienspiele, Handheld-Optionen und Kreativität aus. Der PC ermöglicht individuelle Anpassung, bietet eine große Spielevielfalt und hat eine aktive Modding-Community.",
          isUnlocked: false,
        },
      ],
    },
    {
      id: 1,
      title: "Kapitel 2",
      icon: card2,
      cards: [
        {
          title: "Gaming-Sprache",
          description: "Die Gaming-Sprache umfasst Abkürzungen und Begriffe, die die Kommunikation unter Gamern erleichtern. Die Begriffe können jederzeit im Glossar nachgeschlagen werden.",
          isUnlocked: false,
        },
        {
          title: "Gaming-Genres",
          description: "Es gibt Offline- und Online-Spiele. Offline-Spiele können ohne Internetverbindung gespielt werden und bieten eigenständige Spielerlebnisse. Online-Spiele erfordern eine Internetverbindung und ermöglichen die Interaktion mit anderen Spielern. Es gibt verschiedene Genre von Spielen wie First-Person-Shooter, Adventure und Battle Royale. Jedes Genre hat seine eigenen Merkmale und Spielmechaniken.",
          isUnlocked: false,
        },
        {
          title: "Spiel-Mechaniken",
          description: "Spielmechaniken sind die grundlegenden Regeln und Abläufe eines Spiels. Dazu gehören Bewegung, Kampf, Ressourcenmanagement und Interaktion mit der Spielwelt. Speicherstände ermöglichen das Speichern und Laden des Spielstands, um den Fortschritt im Spiel zu sichern. Levels und Quests dienen dem Fortschritt und der Charakterentwicklung.",
          isUnlocked: false,
        },
      ],
    },
    {
      id: 2,
      title: "Kapitel 3",
      icon: card3,
      cards: [
        {
          title: "Gaming Kompetenzen",
          description: "Beim Gaming können Kinder und Jugendliche verschiedene Kompetenzen entwickeln, darunter kognitive Fähigkeiten wie Aufmerksamkeit und Problemlösung, sensomotorische Fähigkeiten wie Reaktionsgeschwindigkeit und Hand-Auge-Koordination, soziale Kompetenzen wie Teamarbeit und Kommunikation, sowie Medienkompetenz und persönlichkeitsbezogene Kompetenzen.",
          isUnlocked: false,
        },
        {
          title: "Die Gefahren",
          description: "Es ist wichtig, sich der potenziellen Gefahren beim Gaming bewusst zu sein, wie Altersbeschränkungen, In-Game-Käufe, Spielsucht und Jugendschutz. Eltern sollten sicherstellen, dass Spiele altersgerecht sind, Ausgaben kontrollieren, Pausen und ein ausgewogenes Verhältnis zwischen Gaming und anderen Aktivitäten fördern, und den Jugendschutz gewährleisten, um ihre Kinder vor schädlichen Inhalten und Gefahren zu schützen.",
          isUnlocked: false,
        },
        {
          title: "Die Risiken",
          description: "Zu den Gefahren gehören die Darstellung nicht jugendfreier Inhalte, Grooming, Mobbing, Scamming und der Schutz persönlicher Informationen. Eltern sollten Jugendschutzfilter und Altersbeschränkungen überprüfen, persönliche Informationen nicht an Fremde weitergeben, Mobbingfälle melden und Betrugsversuche erkennen, um die Sicherheit ihrer Kinder beim Gaming zu gewährleisten.",
          isUnlocked: false,
        },
      ],
    },
    {
      id: 3,
      title: "Kapitel 4",
      icon: card4,
      cards: [
        {
          title: "Konflikte",
          description: "Konflikte zwischen Eltern und Kindern im Zusammenhang mit Videospielen können vermieden werden, indem Eltern sich mit dem Medium auseinandersetzen und die Interessen ihres Kindes ernst nehmen, ohne Vorurteile.",
          isUnlocked: false,
        },
        {
          title: "Faszination",
          description: "Eltern sollten die Faszination ihres Kindes für Videospiele nachvollziehen und ihnen erlauben, ihre Interessen zu verfolgen. Spiele können eine Möglichkeit bieten, mit Freunden zu interagieren und Fähigkeiten zu entwickeln.",
          isUnlocked: false,
        },
        {
          title: "Kommunikation",
          description: "Es ist wichtig, klare Regeln und Einschränkungen zu setzen und diese mit dem Kind zu besprechen. Eltern können die Altersfreigaben und Spielzeit begrenzen, sollten jedoch auch mit ihrem Kind über die Gründe für diese Regeln kommunizieren und pädagogisch sinnvolle Entscheidungen treffen.",
          isUnlocked: false,
        },
      ],
    },
  ]

  chaptersProgress.subscribe(value => {
  achievements = achievements.map(chapter => {
    const progress = Math.floor(value[chapter.id] || 0);
    const isUnlocked = progress >= 100;
    const achievementCards = chapter.cards.map((card) => {
      return { ...card, isUnlocked };
    });
    return {
      ...chapter,
      cards: achievementCards
    };
  });
});

  let selectedChapter = 0
  let openedCard = null

  function openCard(index) {
    openedCard = index
  }
  function closeCard() {
    openedCard = null
  }

  function selectChapter(index) {
    selectedChapter = index
    closeCard()
  }

  import { fade } from "svelte/transition"

  function getAchievementColor(chapter) {
    switch (chapter) {
      case 0:
        return "first-achievement-color"
      case 1:
        return "second-achievement-color"
      case 2:
        return "third-achievement-color"
      case 3:
        return "fourth-achievement-color"
      default:
        return "first-achievement-color"
    }
  }
</script>


<div in:fade={{ duration: 500 }} class="mx-auto w-[70%] flex items-stretch flex-grow mb-32 min-h-0 overflow-hidden">
  <ul class="flex flex-col gap-4">
    {#each achievements as chapter, index (chapter.id)}
    <li class="flex items-center">
      <button on:click={() => selectChapter(index)} class="text-2xl text-sky-600 font-black p-4 bg-sky-800 bg-opacity-10 rounded-md">
        {chapter.title}
      </button>
      {#if selectedChapter === index}
      <div class="ml-4 w-0 h-0 border-t-[20px] border-t-transparentborder-b-[20px] border-b-transparent border-r-[20px] border-r-sky-800 border-opacity-10" />
      {/if}
    </li>
    {/each}
  </ul>
  <div class="flex-1 bg-sky-800 bg-opacity-10">
    {#if openedCard !== null}
    <div class="flex justify-center py-2 items-stretch h-full min-h-0 overflow-auto">
      <div class="basis-3/12 flex justify-center items-start">
        <button on:click={() => closeCard()}>
          <img class="w-10" src={backButton} alt="back" />
        </button>
      </div>
      <div class={`p-4 ${getAchievementColor(selectedChapter)} border-8 rounded-3xl mr-auto basis-6/12 min-h-0 overflow-auto`}>
        <h6 class="text-md font-bold text-slate-600 mb-4">
          {achievements[selectedChapter].cards[openedCard].title}
        </h6>
        <p class="text-slate-600">
          {achievements[selectedChapter].cards[openedCard].description}
        </p>
      </div>
    </div>
    {:else}
    <div class="flex flex-wrap h-full p-4 justify-start">
      {#each achievements[selectedChapter].cards as card, index}
      {#if card.isUnlocked}
      <button on:click={() => openCard(index)} class="basis-1/2 flex flex-col items-center gap-2">
        <img class="h-32" src={achievements[selectedChapter].icon} alt="achievement" />
        <span class="text-sky-600 font-medium">{card.title}</span>
      </button>
      {/if}
      {/each}
    </div>
    {/if}
  </div>
  <div class="absolute bottom-6 left-6 z-20">
    <img src={maskotWireframe} alt="maskot" class="h-44" />
  </div>
</div>

<style>
  .first-achievement-color {
    @apply bg-yellow-50 border-orange-300;
  }
  .second-achievement-color {
    @apply bg-emerald-50 border-slate-400;
  }
  .third-achievement-color {
    @apply bg-red-50 border-red-300;
  }
  .fourth-achievement-color {
    @apply bg-purple-50 border-slate-400;
  }
</style>