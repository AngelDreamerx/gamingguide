<script>
    import maskotHappy from "src/assets/maskot/emotions/Kapitel_1/Maskottchen_emotionen_1_5.gif"
    import maskotCringe from "src/assets/maskot/emotions/Kapitel_1/Maskottchen_emotionen_1_1.gif"
    import enemy from "src/assets/bosses/idle/Boss_idle_1.gif"
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
    <Questions question="Welche Konsole ist die beste für einen familienfreundlichen Spieleabend?" a="XBOX" b="Nintendo" c="Playstation" d="PC" answer="b" onAnswer={setIsCorrect}/>
    <TextbubbleAndEnemy maskotImgSrc={isCorrect ? maskotHappy : maskotCringe} enemyImgSrc={enemy} text={isCorrect ? `Die Antwort ist richtig! Gut gemacht, ${$username}!`: `Das war leider die falsche Antwort. Versuch es nochmal, ${$username}!`}/>
</div>