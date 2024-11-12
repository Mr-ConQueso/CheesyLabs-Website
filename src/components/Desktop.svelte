<script lang="ts">
	import Window from './Window.svelte';
	import Taskbar from './navigation/Taskbar.svelte';

	let openWindows: string[] = [];

	function openWindow(appName: string): void {
		openWindows = [...openWindows, appName];
	}

	function closeWindow(appName: string): void {
		openWindows = openWindows.filter(name => name !== appName);
	}
</script>

<div class="desktop">
	<!-- Application Icons -->
	<button on:click={() => openWindow('app1')}>App 1</button>
	<button on:click={() => openWindow('app2')}>App 2</button>

	<!-- Open Windows -->
	{#each openWindows as appName}
		<Window {appName} on:close={() => closeWindow(appName)} />
	{/each}

	<!-- Footer Component -->
	<Taskbar time="08:08 PM" />

</div>

<style>
    .desktop {
        display: grid;
        gap: 10px;
        padding: 20px;
				background-color: #008080;
    }
</style>
