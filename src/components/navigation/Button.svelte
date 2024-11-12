<!-- src/components/Button.svelte -->
<script>
	function handleClick() {}
</script>

<button on:click={handleClick} class="orange-button">
	Click Me
</button>

<style>
    .orange-button {
        background-color: #ffa500; /* Orange color */
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
    }

    .orange-button:hover {
        background-color: #ff8c00; /* Darker orange on hover */
    }

    .orange-button:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.5);
    }
</style>