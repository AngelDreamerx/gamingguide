<script>
    export let label;
    export let imgSrc;
</script>

<div class="h-[50%] flex flex-col gap-2">
    <img class="w-full h-full shadow-xl rounded-2xl" src={imgSrc} alt="label"/>
    <div class="text-lg font-normal text-slate-600">
        {label}
    </div>
</div>