<script>
    import maskotHappy from "src/assets/maskot/emotions/Kapitel_4/Maskottchen_emotionen_4_5.gif"
    import maskotCringe from "src/assets/maskot/emotions/Kapitel_4/Maskottchen_emotionen_4_1.gif"
    import enemy from "src/assets/bosses/idle/Boss_idle_4.gif"
    import TextbubbleAndEnemy from "src/components/basic-layout/quiz/TextbubbleAndEnemy.svelte";
    import { username } from "src/lib/stores";
    import Questions from "src/components/basic-layout/quiz/Questions4.svelte";

    let isCorrect = false;
    function setIsCorrect(newValue) {
        isCorrect = newValue;
    }
</script>

<div class="flex flex-col h-full justify-center items-center pb-8">
    <h4 class="text-slate-600 text-lg font-medium self-start mb-8 px-12">
        Wähle die richtige Antwort aus.
    </h4>
    <Questions question="Dein Kind kommt seit 10 min nicht zum Essen. Was tust du?" a="Eine klare Ansage machen" b="Zum Speichern auffordern" c="Das Spiel ausschalten" d="Nach der Verspätung fragen" answer="d" onAnswer={setIsCorrect}/>
    <TextbubbleAndEnemy maskotImgSrc={isCorrect ? maskotHappy : maskotCringe} enemyImgSrc={enemy} text={isCorrect ? `Die Antwort ist richtig! Gut gemacht, ${$username}!`: `Du hast es fast geschafft, ${$username}!`}/>
</div>