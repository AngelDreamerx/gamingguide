<script>
    import yu from "src/assets/yu/wireframe.png"
    import enemy from "src/assets/bosses/Boss_idle_1.gif"
    import TextbubbleAndEnemy from "src/components/basic-layout/quiz/TextbubbleAndEnemy.svelte";
    import { username } from "src/lib/stores";
    import Questions from "src/components/basic-layout/quiz/Questions.svelte";

    let isCorrect = false;
    function setIsCorrect(newValue) {
        isCorrect = newValue;
    }
</script>

<div class="flex flex-col h-full justify-center items-center pb-8">
    <h4 class="text-slate-600 text-lg font-medium self-start mb-8 px-12">
        Wähle die richtige Antwort aus.
    </h4>
    <Questions question="Was kam zeitlich am frühesten?" a="Gameboy" b="Playstation 1" c="NES" d="VR Gaming" answer="c" onAnswer={setIsCorrect}/>
    <TextbubbleAndEnemy yuImgSrc={yu} enemyImgSrc={enemy} text={isCorrect ? `Die Antwort ist richtig! Gut gemacht, ${$username}!`: `Du hast es fast geschafft, ${$username}!`}/>
</div>