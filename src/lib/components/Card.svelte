<script>
	import { goto } from '$app/navigation';
	import defaultCover from "$lib/assets/main_gradient.avif";
	export let post;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={() => goto(post.path)} on:keydown={() => goto(post.path)}>
	{#if !post.meta.featureImage}
        <img src={defaultCover} alt="Default cover." />
    {:else}
        <img src={post.meta.featureImage} alt="Cover image for {post.meta.title}." />
    {/if}
	<h1>{post.meta.title}</h1>
	<span
		>{new Date(post.meta.date).toLocaleDateString(undefined, {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})}
	</span>
</div>

<style>
	.card {
		display: inline-flex;
		flex-direction: column;
		border-radius: 10px;
		border: 1px solid black;
		background-color: white;
		margin: 0px;
		overflow: hidden;
		width: 18rem;
		height: 12rem;
		margin: 10px;
		float: left;
	}

	.card:hover {
		cursor: pointer;
		filter: drop-shadow(16px 16px 5px gray);
	}

	.card:hover > img {
		filter: contrast(90%);
	}

	.card > h1 {
		margin: 0.3rem 0 0;
		text-align: center;
		font-size: 1.5rem;
	}

	.card > span {
		margin: 0;
		text-align: center;
	}

	.card > img {
		max-height: 8rem;
		max-width: 18rem;
	}
</style>