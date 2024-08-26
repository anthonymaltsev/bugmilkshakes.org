<script>
    export let src;
    export let caption;
</script>
<div class="row justify-content-center">
    <div class="col-12 col-sm-6 justify-content-center">
        <div class="row">
            <img {src} alt={caption} />
        
        </div>
        
        <div class="row text-center">
            <p class="text-center" id="caption">{caption}</p>
        </div>
    </div>
</div>

<style>
    #caption {
        font-style: italic;
        font-size: 0.8rem;
    }
</style>