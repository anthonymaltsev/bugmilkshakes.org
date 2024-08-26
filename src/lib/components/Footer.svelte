<!-- Footer.svelte -->
<div class="container-fluid">
	<div class="row footer justify-content-between">
		<div class="col-12 col-sm-3 text-start"> 
			Made by Anthony Maltsev, 2024 
		</div>
	
		<div class="col-12 col-sm-3 text-end">
			<a href="mailto:ant@bugmilkshakes.org">Email: ant@bugmilkshakes.org </a>
		</div>
	</div>
</div>

<style>
	.footer {
        background: #ddd;
		font-size: var(--footer-text-size);
		min-height: var(--footer-height);
		align-items: center;
		/* text-align: center; */
		margin-top: 1.5rem;
    }

	a {
		text-decoration: none;
		color: inherit;
	}
</style>