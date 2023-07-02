<script>
    export let yuImgSrc;
    export let enemyImgSrc;
    export let text;
</script>

<div class="w-full flex justify-between items-end relative mb-12 pt-24">
   <img src={yuImgSrc} alt="yu" class="absolute z-50 bottom-0 -left-6 h-44"/>
   <div class="mb-8 z-40 bg-white opacity-75 w-2/3 h-32 p-8 pl-32 rounded-xl flex items-center">
        <p class="h-full text-slate-600 text-lg overflow-auto">
            {text}
        </p>
   </div> 
   <img src={enemyImgSrc} alt="enemy" class="h-64 absolute -right-16 bottom-0"/>
</div>