<script>
	import { goto } from '$app/navigation';
	import defaultCover from "$misc/main_gradient.avif";
	export let post;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card d-flex align-items-stretch col-12 col-sm-6 col-md-4 col-lg-3" on:click={() => goto(post.path)} on:keydown={() => goto(post.path)}>
	{#if !post.meta.featureImage}
        <img class="card-img-top img-responsive px-0" src={defaultCover} alt="Default cover." />
    {:else}
        <img class="card-img-top img-responsive px-0" src={post.meta.featureImage} alt="Cover image for {post.meta.title}." />
    {/if}
	<div class="card-body text-center">
		<h4 class="card-title">{post.meta.title}</h4>
	  	<p class="card-subtitle d-none d-md-block">{new Date(post.meta.date).toLocaleDateString(undefined, {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			timeZone: "UTC"
		})}</p>
	</div>
</div>

<style>
	.card {
		display: flex;
		margin: 0rem;
	}

	.card:hover {
		cursor: pointer;
		background-color: #eee;
	}

	.card-img-top {
		height: 8rem;
		object-fit: cover;
	}

	.card-title {
		font-size: 1.2rem;
	}
</style>