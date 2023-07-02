<script>
    import maskotWireframe from 'src/assets/maskot/walk/Maskottchen_laufen_4.gif'

    import { greetingDone } from 'src/lib/stores';
</script>

<div class="z-40 flex flex-col mx-24 items-center pt-24 h-full relative">
    <p class="text-xl text-sky-600 mb-4 w-[70%] text-center">Heutzutage spielen etwa 89% aller Kinder und Jugendliche
        regelmäßig Videospiele. Daher ist die Wahrscheinlichkeit
        hoch, das du dich als Elternteil oder Pädagoge in der
        Situation befindest, ein Kind zu betreuen das gerne vor der
        Konsole sitzt. Der fehlende Bezug zur Gaming-Welt lässt das
        Verständnis der Faszination des Kindes nicht zu und kann zu
        Konflikten führen.</p>
    <div class="flex mt-auto justify-end w-[80%] mb-24 items-end mx-auto relative">
      <img class="h-64 absolute left-[50%] translate-x-[-50%]" src={maskotWireframe} alt="maskot" />
      <button on:click={() => greetingDone.update(() => "done")} class="text-2xl font-bold rounded-3xl py-4 px-6 bg-white text-sky-700">weiter</button>
    </div>
</div>