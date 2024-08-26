<!-- src/routes/blog/+page.svelte -->
<script>
	import Card from '$components/Card.svelte';
	import Icon from '$components/Icon.svelte';

	export let data;
	let tags = [];
	for (const post of data.posts) {
		for (const tag of post.meta.tags) {
			if (tags.indexOf(tag) == -1) {
				tags.push(tag);
			}
		}
	}
	tags.sort();

	$: currTag = "ALL";

	const updateCurrTag = (tag) => {
		currTag = tag;
	}
</script>

<head>
	<title>Blog</title>
</head>

<div class="container-fluid">
	<div class="row" id="top-of-blog">
		<div class="col-10 col-sm-11" id="tags-section"> 
			<div id="tags-top"> Choose tag type to filter by, or choose 'ALL' to display all blog posts. </div>
			
			<div id="tags-bottom">
				<input 
					type="radio" 
					name="activeTag" 
					value="ALL" 
					id="ALL" 
					class="radiobtn" 
					on:click={() => {updateCurrTag("ALL")}} 
					checked
				/>
				<label class="tag" for="ALL">
					ALL 
				</label>
				{#each tags as tag}
					<input 
						type="radio" 
						name="activeTag" 
						value={tag} 
						id={tag} 
						class="radiobtn" 
						on:click={() => {updateCurrTag(tag)}}
					/>
					<label class="tag" for={tag}>	
						{tag} 
					</label>
				{/each}
			</div>
			
		</div>
	
		<a href="/rss" class="col-2 col-sm-1 no-text-decoration" id="rss-subscribe"> 
			<Icon char=&#xf09e type="solid" /> 
		</a>
	</div>

	<div class="row card-columns" id="blog-section">
		{#each data.posts as post}
			{#if currTag === "ALL"}
				<Card {post} />
			{:else}
				{#each post.meta.tags as tag}
					{#if tag === currTag}
						<Card {post} />
					{/if}
				{/each}
			{/if}
		{/each}
	</div>
</div>

<style> 
	.tag {
		display: inline-flex;
		flex-direction: row;

		font-size: 1rem;
		font-weight: bold;

		color: black;
		padding: 0.25rem;
		border-radius: 8px;
		border: 1px solid black;
		background-color: #ddd;

		margin: 0.1rem;

	}

	.tag:hover {
		cursor: pointer;
	}

	.radiobtn {
		display:none
	}

	.radiobtn:checked + label{
		background-image: var(--main-back-img);
		background-size: 200px;
		border: 1px solid black;
	}
</style>