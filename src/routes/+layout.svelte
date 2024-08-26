<!-- +layout.svelte -->

<script>
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import '$lib/styles/style.css';

</script>

<div>
	<Header />

	<div class="container" id="content-body">
		<slot />
	</div>

	<Footer />
</div>

<style>
	#content-body {
		min-height: calc(100vh - var(--footer-height) - var(--header-height))
	}
</style>
