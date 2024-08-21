<!-- src/routes/blog/+page.svelte -->
<script>
	import Card from '$lib/components/Card.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { goto } from '$app/navigation';

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


<div id="top-of-blog">
	<div id="tags-section"> 
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

	<a href="/rss" id="rss-subscribe"> 
        <Icon char=&#xf09e type="solid" /> 
    </a>
</div>
<div class="clear-floats"></div>

<div id="blog-section">
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



<style> 
	.tag {
		display: inline-flex;
		flex-direction: row;

		font-size: 1.5rem;
		font-weight: bold;

		color: black;
		padding: 0.75rem;
		border-radius: 8px;
		border: 1px solid black;
		background-color: #ddd;

		margin: 0.5rem;
		margin-bottom: 1rem;

	}

	.tag:hover {
		cursor: pointer;
	}

	.radiobtn {
		display:none
	}

	.radiobtn:checked + label{
		background-image: url("$lib/assets/main_gradient.avif");
		background-size: 200px;
		border: 1px solid black;
	}

	#top-of-blog {
		display:block;
	}

	#tags-section {
		display: grid;
		width: calc(100% - 5rem);
		float: left;
	}
	#tags-top {
		display: block;
	}
	#tags-bottom {
		display: block;
	}

	#rss-subscribe {
		display: flex;
		float:right;
		align-self: center;
		align-items: center;
		align-content: center;
		
		width:5rem;
		height:5rem;

		font-size: 4rem;
		color: black;
		text-align: center;
		text-decoration: none;
        background-color: none;
	}

	#blog-section {
		display: block;
	}

	.clear-floats {
		clear: both;
	}
</style>