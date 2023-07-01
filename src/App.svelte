<script>
    import Router from "svelte-spa-router"

    import MainMenu from "src/components/main-menu/MainMenu.svelte";
    import Chapter1 from "src/components/chapter-01/index.svelte"
    import Chapter2 from "src/components/chapter-02/index.svelte"
    import Chapter3 from "src/components/chapter-03/index.svelte"
    import Chapter4 from "src/components/chapter-04/index.svelte"

    const routes = {
        '/': MainMenu,
        '/chapters/1': Chapter1,
        '/chapters/2': Chapter2,
        '/chapters/3': Chapter3,
        '/chapters/4': Chapter4
    }
</script>


<main class="h-screen w-screen relative">
    <Router routes={routes}/>
</main>