<script>
    export let src;
    export let caption;
</script>

<div class="small-center">
    <img {src} alt={caption}>
</div>

<div class="small-center">
    {caption}
</div>

<style>
    img {
        width: 75%;
        border-radius: 10px;
    }
    .small-center {
        width: 75%;
        font-size: 0.85rem;
        font-style: italic;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        
    }
</style>