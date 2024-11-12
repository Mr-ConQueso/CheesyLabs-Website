// src/routes/+layout.js
import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const prerender = true;

export const load = async () => {

	if (browser) {
		posthog.init(
			'phc_P4XIZJGudHFDUzVl3cnRQphOfDOuviti3YmaVhTiCuJ',
			{
				api_host: 'https://us.i.posthog.com',
				person_profiles: 'identified_only',
				capture_pageview: false
			}
		)
	}
	return
};