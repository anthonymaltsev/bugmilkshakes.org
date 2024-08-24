<!-- Header.svelte -->

<nav class="navbar navbar-light navbar-expand-sm header">
	<div class="container-fluid">
		<a class="navbar-brand" id="logo" href="/">Bug Milkshakes</a>
		
		<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#bugmilk-nav" 
				aria-controls="bugmilk-nav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse justify-content-end" id="bugmilk-nav" >
			<ul class="navbar-nav mr-auto">
				<li class="nav-item navbaritem"> <a href="/blog" class="nav-link">Blog</a> </li>
				<li class="nav-item navbaritem"> <a href="/cv" class="nav-link">CV</a> </li>
			</ul>
		</div>
	</div>
</nav>


<style>
	.header {
		min-height: var(--header-height);
		background: #ddd;
	}

	#logo {
		font-size: 2rem;
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
		background-image: var(--main-back-img);
		background-size: 200px;
		border: 1px solid black;
	}

	a {
		text-decoration: none;
		color: inherit;
		display: flex;
	}
</style>