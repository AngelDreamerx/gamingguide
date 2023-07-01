<script>
    import ChapterNavbar from "src/components/ChapterNavbar.svelte";
    import Background from "./Background-01.svelte";
    import Step_01 from "./steps/Step-01.svelte";
    import Step_02 from "./steps/Step-02.svelte";
    import NextButton from "../NextButton.svelte";
    import PreviousButton from "../PreviousButton.svelte";
    import { push } from "svelte-spa-router";
    import { chaptersProgress } from "src/lib/stores";


    let steps = [
        {
            id: 0,
            component: Step_01,
            title: ""
        },
        {
            id: 1,
            component: Step_02,
            title: "Die Geschichte des Gamings"
        },
        {
            id: 2,
            component: Step_02,
            title: "Testing"
        },
    ]

    let currentStep = 0

    function calculateProgress(newCurrentStep) {
        const newProgress = (100 / steps.length) * newCurrentStep
            chaptersProgress.update((value) => {
                if (value[0] === undefined || value[0] < newProgress) { 
                    return {...value, [0]: newProgress } 
                }
                return {...value}
            })
    }

    function previousStep() {
        if(currentStep > 0) { currentStep -= 1 }
    }

    function nextStep() {
        calculateProgress(currentStep + 1)
        if(currentStep < steps.length - 1) { 
            currentStep += 1
        } else {
            push("/") 
        }
    }
</script>

<div class="z-40 flex flex-col h-full relative">
    <ChapterNavbar title={steps[currentStep].title} titleColorClasses="text-yellow-500" onBack={null} displayBack={false} />
    <div class="flex h-full items-center justify-center">
        <!-- Hide previous button for first step (can't go back) -->
        <PreviousButton hide={currentStep <= 0} clickFn={previousStep} colorClasses="text-yellow-500"/>
        <div class="basis-10/12 h-full pt-32">
            <svelte:component this={steps[currentStep].component}/>
        </div>
        <!-- Next button is always present (will go back to main menu on last step) -->
        <NextButton clickFn={nextStep} colorClasses="text-yellow-500"/>
    </div>
</div>

<!-- TODO: change background -->
<Background/>