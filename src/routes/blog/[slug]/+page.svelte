<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<head>
	<title>{data.title}</title>
</head>

<article>
	<div class="underlined">
		<h1>{data.title}</h1>
		<p><b>Published: </b>{data.date}</p>
		<p><b>Tags: </b>{data.tags}</p>
	</div>
	
	<div class="underlined"><svelte:component this={data.content} assets={data.assets}/></div>

	<div>Any comments? Send them to <a href="mailto:ant@bugmilkshakes.org">ant@bugmilkshakes.org</a></div>
</article>

<style>
	.underlined {
		border-bottom: 1px solid black;
		margin-bottom: 1rem;
	}
</style>