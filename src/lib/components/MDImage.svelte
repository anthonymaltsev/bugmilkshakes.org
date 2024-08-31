<script>
    export let src;
    export let caption;

    export let size = "medium";
</script>
<div class="row justify-content-center">
{#if size === "small"}
    <div class="col-10 col-sm-4 justify-content-center">
        <div class="row">
            <img {src} alt={caption} />
        
        </div>
        
        <div class="row text-center">
            <p class="text-center" id="caption">{caption}</p>
        </div>
    </div>
{:else if size === "large"}
    <div class="col-12 col-sm-9 justify-content-center">
        <div class="row">
            <img {src} alt={caption} />
        
        </div>
        
        <div class="row text-center">
            <p class="text-center" id="caption">{caption}</p>
        </div>
    </div>
{:else}
    <div class="col-12 col-sm-6 justify-content-center">
        <div class="row">
            <img {src} alt={caption} />
        
        </div>
        
        <div class="row text-center">
            <p class="text-center" id="caption">{caption}</p>
        </div>
    </div>
{/if}
    
        
</div>

<style>
    #caption {
        font-style: italic;
        font-size: 0.8rem;
    }
</style>