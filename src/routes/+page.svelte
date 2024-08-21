<script>
    import Icon from '$lib/components/Icon.svelte';
    import portrait from '$lib/assets/hawaii_waterfall.jpg'
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
    <a href="https://github.com/anthonymaltsev" rel="external" class="link"> 
        <Icon char=&#xf09b type="brand" /> 
    </a>

    <a href="https://linkedin.com/in/anthony-maltsev" rel="external" class="link"> 
        <Icon char=&#xf0e1 type="brand" /> 
    </a>

    <a href="https://instagram.com/bug_milkshakes" rel="external" class="link"> 
        <Icon char=&#xf16d type="brand" /> 
    </a>

    <a href="mailto:anthony.maltsev@gmail.com" rel="external" class="link"> 
        <Icon char=&#xf1fa type="solid" /> 
    </a>
</div>

<img src={portrait} alt="Me in front of a waterfall" id="portrait" class="center"/>

<div id="ps">p.s. Anthony Maltsev == ant malts == bug milkshakes</div>

<style>
    a {
        user-select: none;
        font-size: 4rem;
        font-family: lineawesome-brands;
        color: black;
    }

    #welcome {
        margin-bottom: 20px;
    }

    #portrait {
        width: 60%;
        display: block;
        margin: auto;
        margin-top: 20px;
        border-radius: 10px;
    }
    
    #ps {
        padding-top: 20px;
        display: block;
        margin: auto;
        font-size: 0.85rem;
        font-style: italic;
        text-align: center;
    }

    .link {
        text-decoration: none;
        background-color: none;
    }
</style>

