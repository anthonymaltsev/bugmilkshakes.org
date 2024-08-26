<script>
    import Icon from '$components/Icon.svelte';
    import MDImage from '$components/MDImage.svelte';
</script>

<head>
	<title>Bug Milkshakes</title>
</head>

<div id="welcome">
    <h2> Hey.</h2>
    <p>Fancy seeing you here.</p>
    <p>I'm Anthony Maltsev, this is my personal website -- if you come via pedestrian foot traffic, you are probably here for my blog. Go there.</p>
    <p>If you come because you are looking to hire me, please please please give me a job. You can look at my CV section to get an idea of my work experiences.</p>
    <p>Here are some links to other places that you can find me:</p>
</div>

<div id="social-media">
    <a href="https://github.com/anthonymaltsev" rel="external" class="no-text-decoration"> 
        <Icon char=&#xf09b type="brand" /> 
    </a>

    <a href="https://linkedin.com/in/anthony-maltsev" rel="external" class="no-text-decoration"> 
        <Icon char=&#xf0e1 type="brand" /> 
    </a>

    <a href="https://instagram.com/bug_milkshakes" rel="external" class="no-text-decoration"> 
        <Icon char=&#xf16d type="brand" /> 
    </a>

    <a href="mailto:ant@bugmilkshakes.org" rel="external" class="no-text-decoration"> 
        <Icon char=&#xf1fa type="solid" /> 
    </a>
</div>

{#await import("$misc/hawaii_waterfall.jpg")}
    Loading Image...
{:then {default: imgsrc}} 
    <MDImage src={imgsrc} caption="p.s. Anthony Maltsev == ant malts == bug milkshakes"/>
{/await}

<style>
    #welcome {
        margin-bottom: 20px;
    }    
</style>

