<script>
    export let src;
    export let caption;
</script>

<div class="row justify-content-center">
    <div class="col-12 col-sm-6 justify-content-center">
        <div class="row">
            <audio controls="controls">
                <source type="audio/mp3" {src} />
                <p>Your browser does not support the audio element.</p>
            </audio>
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