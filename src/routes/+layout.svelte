<!-- +layout.svelte -->

<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';

</script>

<Header />

<main>
	<div class="center">
		<slot />
	</div>
</main>

<Footer />

<style>
	main {
		background: transparent;
		display: block;	
		min-width: 90%;	
		min-height: 90vh;
	}

</style>
