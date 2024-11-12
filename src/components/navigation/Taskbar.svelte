<script lang="ts">
	export let time: string = "08:08 PM"; // Pass the time as a prop if needed
</script>

<div class="footer">
	<div class="footer-left">
		<img src="/icon/favicon-32x32.png" alt="Start Icon" class="start-icon" />
		<span>Cheesy Labs</span>
	</div>
	<div class="footer-right">
		<span>{time}</span>
	</div>
</div>

<style>
    /* Ensure footer spans the full viewport width and is centered */
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #c0c0c0;
        padding: 5px;
        border-top: 2px solid #808080;
        border-bottom: 2px solid white;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        box-sizing: border-box;
    }

    .footer-left {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-left: 10px; /* Add a bit of padding if necessary */
    }

    .footer-right {
        margin-right: 10px;
        font-family: 'W95font', sans-serif;
        font-size: 14px;
        white-space: nowrap; /* Prevent time text from wrapping */
    }

    .start-icon {
        width: 20px;
        height: 20px;
    }
</style>