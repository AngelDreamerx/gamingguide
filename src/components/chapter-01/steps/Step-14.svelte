<script>
    import yu from "src/assets/yu/wireframe.png"
    import enemy from "src/assets/bosses/Boss_idle_1.gif"
</script>

<div class="flex flex-col h-full justify-center items-center gap-8">
    <h1 class="text-6xl font-bold text-yellow-500">
        Ein Gegner ist eingetroffen
    </h1>
    <h2 class="text-2xl font-medium text-yellow-500">
        Teste dein Wissen
    </h2>
    <div class="flex items-end gap-48 mt-auto mb-8">
        <img src={yu} alt="yu" class="h-64" />
        <img src={enemy} alt="enemy" class="h-80" />
    </div>
</div>