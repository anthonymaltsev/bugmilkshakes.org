<script>
    export let src;
    export let caption;
</script>

<div class="small-center">
    <audio controls="controls">
        <source type="audio/mp3" {src} />
        <p>Your browser does not support the audio element.</p>
    </audio>
</div>

<div class="small-center">
    {caption}
</div>

<style>
    audio {
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