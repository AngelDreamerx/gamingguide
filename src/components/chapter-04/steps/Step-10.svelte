<script>
    import maskot from "src/assets/maskot/emotions/Kapitel_4/Maskottchen_emotionen_4_4.gif"
    import enemy from "src/assets/bosses/defeated/Boss_tot_4.gif"
    import { username } from "src/lib/stores";
</script>

<div class="flex flex-col h-full justify-end items-center pb-8">
    <div class="w-full flex justify-between items-end relative mb-12 pt-24">
       <img src={maskot} alt="maskot" class="absolute z-50 bottom-0 -left-20 h-52"/>
       <div class="mb-8 z-40 bg-white opacity-75 w-2/3 p-8 pl-32 rounded-xl flex items-center ml-4">
            <!-- <p class="h-full text-slate-600 text-lg overflow-auto"> -->
            <p class="h-full text-slate-600 text-lg">
                Sehr gut, {$username}, du hast das Ungeheuer besiegt! 
                <br/>
                Du bist ein Überflieger!
            </p>
       </div> 
       <img src={enemy} alt="enemy" class="h-64 absolute -right-16 bottom-0"/>
    </div>
</div>