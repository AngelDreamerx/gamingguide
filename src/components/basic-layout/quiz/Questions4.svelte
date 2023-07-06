<script>
    export let question;
    export let a;
    export let b;
    export let c;
    export let d;

    export let answer;
    export let onAnswer;
    let isCorrect;

    function selectAnswer(id) {
        if(id === answer) {
           isCorrect = true 
           onAnswer(true);
           wrongAnswer = null
        } else {
            isCorrect = false
            onAnswer(false);
            wrongAnswer = id
        }
    }

    let wrongAnswer = null 
</script>

<div class="h-full w-full grid grid-cols-2 gap-x-32 gap-y-8 px-12">
    <div class="textbox col-span-2 py-4">{question}</div>

    <button on:click={() => selectAnswer("a")} class={`textbox col-span-1 ${wrongAnswer === "a" && "wrong"} ${answer === "a" && isCorrect && "correct"}`}>{a}</button>
    <button on:click={() => selectAnswer("b")} class={`textbox col-span-1 ${wrongAnswer === "b" && "wrong"} ${answer === "b" && isCorrect && "correct"}`}>{b}</button>
    <button on:click={() => selectAnswer("c")} class={`textbox col-span-1 ${wrongAnswer === "c" && "wrong"} ${answer === "c" && isCorrect && "correct"}`}>{c}</button>
    <button on:click={() => selectAnswer("d")} class={`textbox col-span-1 ${wrongAnswer === "d" && "wrong"} ${answer === "d" && isCorrect && "correct"}`}>{d}</button>
</div>

<style>
    .textbox {
        @apply rounded-2xl text-slate-600 text-xl font-medium flex items-center justify-center bg-orange-200 bg-opacity-50 px-16 py-8;
    }

    .correct {
        @apply text-slate-50 bg-yellow-500 bg-opacity-100;
        background-color: #472361;
    }

    .wrong {
        @apply text-slate-50 bg-zinc-500 bg-opacity-100;
    }
</style>