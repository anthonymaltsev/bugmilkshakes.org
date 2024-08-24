<!-- +layout.svelte -->

<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';

</script>

<div>
	<Header />

	<div class="container">
		<slot />
	</div>

	<Footer />
</div>
