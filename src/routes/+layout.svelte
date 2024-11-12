<!-- src/routes/+layout.svelte -->
<script>
	import posthog from 'posthog-js'
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	import '../app.css';

	if (browser) {
		afterNavigate(() => posthog.capture('$pageview'));
	}
</script>

<slot></slot>