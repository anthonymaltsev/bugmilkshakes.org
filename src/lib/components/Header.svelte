<!-- Header.svelte -->

<script>
	import '$lib/styles/style.css';
</script>

<header>
	<div class="center">
		<a href="/" class="left" id="logo">Bug Milkshakes</a>
	
		<nav class="right">
			<div>
				<a href="/blog" class="navbaritem">Blog</a>
				<a href="/cv" class="navbaritem">CV</a>
			</div>
		</nav>
	</div>
</header>

<style>
	header {
		min-height: var(--header-height);
		background: #ddd;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		color: black;
		font-size: 3rem;
	}

	#logo {
		font-weight: bold;
		padding: 1rem 0;
	}

	#logo:hover {
		color: transparent;
		background-image: url("$lib/assets/main_gradient.avif");
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-stroke: #111 1px;
		background-position: left;
		background-size: 200px;
		transition: color 0.1s;
	}

	.navbaritem {
		display: inline-flex;
		flex-direction: row;
		align-self: center;

		font-size: 1.5rem;
		font-weight: bold;
		color: black;
		padding: 0.75rem;
		border-radius: 8px;
		border: 1px solid transparent;
		background-image: none;
		background-clip: border-box;
		-webkit-background-clip: border-box;
	}

	.navbaritem:hover {
		background-image: url("$lib/assets/main_gradient.avif");
		background-size: 200px;
		border: 1px solid black;
	}

	a {
		text-decoration: none;
		color: inherit;
		display: flex;
	}
</style>