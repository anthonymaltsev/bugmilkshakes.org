<script>
    export let char;
    export let type;
</script>

<span class={type}>
    {char}
</span>

<style>
    .brand {
        font-family: 'lineawesome-brands';
    }

    .solid {
        font-family: 'lineawesome-solid';
    }

    .regular {
        font-family: 'lineawesome-regular';
    }

    span {
        margin: 0;
        user-select: none;
    }

    :hover {
        color: transparent;
		background-image: url("$lib/assets/main_gradient.avif");
		background-clip: text;
		-webkit-background-clip: text;
        -webkit-text-stroke: #111 1px;
		background-position: left;
        background-size: 200px
    }
</style>