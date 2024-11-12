<!-- src/routes/+page.svelte -->
<script>
	import Desktop from '../components/Desktop.svelte';
</script>

<main class="page">
	<Desktop />
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