import App from './mapHolder.svelte'

const app = new App({
	target: document.body,
	props: {
		ready: false,
	}
});

export default app;