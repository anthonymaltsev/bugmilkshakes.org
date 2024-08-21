<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data;
</script>

<head>
	<title>{data.title}</title>
</head>

<article>
	<div id="title">
		<h1>{data.title}</h1>
		<p>{data.date}</p>
	</div>
	
	<div id="content"><svelte:component this={data.content} /></div>
</article>

<style>
	#title {
		border-bottom: 1px solid black;
	}
</style>