<script>
    export let imgSrc;
    export let label;
</script>

<div class="w-full h-full flex flex-col gap-2">
    <img class="w-full h-full flex-1 shadow-xl rounded-2xl" src={imgSrc} alt={label}/>
    <div class="text-lg font-normal text-slate-600">
        {label}
    </div>
</div>