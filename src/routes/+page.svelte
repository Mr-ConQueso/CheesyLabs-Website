<!-- src/routes/+page.svelte -->
<script>
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import GameDevSection from '../components/sections/GameDevSection.svelte';
</script>

<main class="page">
	<HeroSection />
	<ProjectsSection />
	<GameDevSection />
</main>

<style>
    @import './variables.css';

    .page {
        color: var(--dark-background);
        font-size: 21px;
        line-height: 1.4;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
    }
</style>