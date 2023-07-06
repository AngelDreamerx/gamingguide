<script>
    import maskot from "src/assets/maskot/emotions/Kapitel_1/Maskottchen_emotionen_1_2.gif"
    import enemy from "src/assets/bosses/idle/Boss_idle_1.gif"
</script>

<div class="flex flex-col h-full justify-center items-center gap-8">
    <h1 class="text-6xl font-bold text-yellow-500 text-center">
        Ein Gegner ist eingetroffen
    </h1>
    <h2 class="text-2xl font-medium text-yellow-500">
        Teste dein Wissen
    </h2>
    <div class="flex items-end gap-48 mt-auto mb-8">
        <img src={maskot} alt="maskot" class="h-64" />
        <img src={enemy} alt="enemy" class="h-80" />
    </div>
</div>