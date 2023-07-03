<script>
    import ChapterNavbar from "src/components/ChapterNavbar.svelte";
    import Background from "./Background-02.svelte";
    import Step_01 from "./steps/Step-01.svelte";
    import Step_02 from "./steps/Step-02.svelte";
    import NextButton from "../NextButton.svelte";
    import PreviousButton from "../PreviousButton.svelte";
    import { push } from "svelte-spa-router";
    import { chaptersProgress } from "src/lib/stores";
    import Step_03 from "./steps/Step-03.svelte";
    import Step_04 from "./steps/Step-04.svelte";
    import Step_05 from "./steps/Step-05.svelte";
    import Step_06 from "./steps/Step-06.svelte";
    import Step_07 from "./steps/Step-07.svelte";
    import Step_08 from "./steps/Step-08.svelte";
    import Step_09 from "./steps/Step-09.svelte";
    import Step_10 from "./steps/Step-10.svelte";
    import Step_11 from "./steps/Step-11.svelte";
    import Step_12 from "./steps/Step-12.svelte";
    import Step_13 from "./steps/Step-13.svelte";
    import Step_14 from "./steps/Step-14.svelte";
    import Step_15 from "./steps/Step-15.svelte";
    import Step_16 from "./steps/Step-16.svelte";
    import Step_17 from "./steps/Step-17.svelte";
    import Step_18 from "./steps/Step-18.svelte";


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
            component: Step_03,
            title: "Die Geschichte des Gamings"
        },
        {
            id: 3,
            component: Step_04,
            title: "Die Geschichte des Gamings"
        },
        {
            id: 4,
            component: Step_05,
            title: "Die Gaming Branche"
        },
        {
            id: 5,
            component: Step_06,
            title: "Die Gaming Branche"
        },
        {
            id: 6,
            component: Step_07,
            title: "Die Gaming Branche"
        },
        {
            id: 7,
            component: Step_08,
            title: "Die Gaming Branche"
        },
        {
            id: 8,
            component: Step_09,
            title: "Die Auswahl der Konsole"
        },
        {
            id: 9,
            component: Step_10,
            title: "Die Auswahl der Konsole"
        },
        {
            id: 10,
            component: Step_11,
            title: "Die Auswahl der Konsole"
        },
        {
            id: 11,
            component: Step_12,
            title: "Die Auswahl der Konsole"
        },
        {
            id: 12,
            component: Step_13,
            title: "Die Auswahl der Konsole"
        },
        // AB HIER QUIZ
        {
            id: 13,
            component: Step_14,
            title: ""
        },
        {
            id: 14,
            component: Step_15,
            title: "Abfrage"
        },
        {
            id: 15,
            component: Step_16,
            title: "Abfrage"
        },
        {
            id: 16,
            component: Step_17,
            title: ""
        },
        {
            id: 17,
            component: Step_18,
            title: ""
        }
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
    
    import { fade } from "svelte/transition"
</script>

<div in:fade={{duration: 500}} class="z-40 flex flex-col h-full relative">
    <!-- displays logo and title in top left and top right corner  -->
    <ChapterNavbar title={steps[currentStep].title} titleColorClasses="text-emerald-500" onBack={null} displayBack={false} />
    
    <!-- 3-part "grid" left and right button with content in the middle -->
    <div class="flex h-full items-center justify-center gap-8">
        <!-- Hide previous button for first step (can't go back) -->
        <PreviousButton hide={currentStep <= 0} clickFn={previousStep} colorClasses="text-emerald-500"/>

        <!-- Main content -->
        <div class="basis-10/12 h-full pt-32">
            <svelte:component this={steps[currentStep].component}/>
        </div>

        <!-- Next button is always present (will go back to main menu on last step) -->
        <NextButton clickFn={nextStep} colorClasses="text-emerald-500"/>
    </div>
</div>

<Background/>