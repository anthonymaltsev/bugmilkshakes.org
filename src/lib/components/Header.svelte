<!-- Header.svelte -->

<nav class="navbar navbar-light navbar-expand-sm header">
	<div class="container-fluid">
		<a class="navbar-brand hover-gradient-text no-text-decoration" id="logo" href="/">Bug Milkshakes</a>
		
		<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#bugmilk-nav" 
				aria-controls="bugmilk-nav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse justify-content-end" id="bugmilk-nav" >
			<ul class="navbar-nav mr-auto">
				<li class="nav-item navbaritem hover-gradient-background button-box"> 
					<a href="/blog" class="nav-link no-text-decoration">Blog</a> 
				</li>
				<li class="nav-item navbaritem hover-gradient-background button-box"> 
					<a href="/cv" class="nav-link no-text-decoration">CV</a> 
				</li>
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
		font-size: var(--header-logo-size);
		font-weight: bold;
		padding: 1rem 0;
	}

	.navbaritem {
		display: inline-flex;
		flex-direction: row;
		align-self: center;

		font-size: 1.5rem;
		font-weight: bold;
		color: black;
	}
</style>