 <script>
    import maskotWireframe from "src/assets/maskot/idle/Maskottchen_idle_0.gif"
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{duration: 500}} class="mx-auto w-[70%] min-h-0 overflow-hidden">
    <div class="flex flex-col gap-4 h-full">

         <h2 class="text-5xl">Impressum</h2>
         <p><br><br>
Dieses Projekt ist im Sommersemester 2023 im Fach Motion Design an der Technischen Hochschule Ulm THU entstanden.
<br><br>
Projektinitiatoin, Projektleiterin und Fachliche Betreuerin: <b>Prof. Susanne Radtke</b>
<br><br>
Autoren und inhaltich Verantwortliche: <b>Alexandra Asmus, Lisa-Marie Müller, Angelika Schneider und Alexandra Stoll
</b><br><br>
Das Projekt ist urheberrechtlich geschützt. Alle Rechte liegen bei den Autoren bzw. bei der Technischen Hochschule Ulm THU.</p>
    </div>
    <div class="absolute bottom-6 left-6 z-20">
        <img src={maskotWireframe} alt="maskot" class="h-44" />
    </div>
</div>