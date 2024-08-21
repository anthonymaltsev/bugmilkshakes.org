<!-- Footer.svelte -->
<script>
	import '$lib/styles/style.css';
</script>

<footer>
	<div class="center">
		<span class="left"> Made by Anthony Maltsev, 2024 </span>
	
		<ul class="right">
			<li>
				<a href="mailto:anthony.maltsev@gmail.com">Email: ant@bugmilkshakes.org </a>
			</li>
		</ul>
	</div>
</footer>

<style>


	footer {
		position: relative;
		margin-top: -30px;
		height: 30px;
		clear: both;
        background: #ddd;
        padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: var(--footer-text-size);
    }

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>