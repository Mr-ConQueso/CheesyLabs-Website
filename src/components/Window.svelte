<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	export let appName: string;

	const dispatch = createEventDispatcher();

	// Trigger the close event
	const closeWindow = () => {
		dispatch("close");
	};

	let windowElement: HTMLDivElement;
	let isDragging = false;
	let startX = 0;
	let startY = 0;
	let offsetX = 0;
	let offsetY = 0;

	const handleMouseDown = (event: MouseEvent) => {
		isDragging = true;
		startX = event.clientX - offsetX;
		startY = event.clientY - offsetY;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (isDragging) {
			offsetX = event.clientX - startX;
			offsetY = event.clientY - startY;
			windowElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
		}
	};

	const handleMouseUp = () => {
		isDragging = false;
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
	};

	onMount(() => {
		windowElement.style.position = "absolute";
		windowElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
	});
</script>

<div bind:this={windowElement} class="window">
	<div
		class="title-bar"
		role="button"
		tabindex="0"
		on:mousedown={handleMouseDown}
		aria-label="Window Title Bar"
	>
		<span>{appName}</span>
		<button class="close-button" on:click={closeWindow} aria-label="Close window">X</button>
	</div>
	<div class="content">
		<!-- Window content goes here -->
	</div>
</div>

<style>
    .window {
        width: 300px;
        background-color: #c0c0c0;
        border: 2px solid #808080;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }

    .title-bar {
        background-color: #000080;
        color: white;
        padding: 5px;
        cursor: move;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .close-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 14px;
    }

    .content {
        padding: 10px;
    }
</style>