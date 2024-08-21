---
title: This Website
date: '2024-08-22'
featureImage: /src/lib/assets/svelte_logo.png
tags:
  - Project
---
<script>
  import MDImage from "$lib/components/MDImage.svelte";
  import MDAudio from "$lib/components/MDAudio.svelte";

  import peter from "$lib/assets/peter_the_chicken.jpg";
</script>

### Idea
Well, here it is, I made a little [website](/) for little old me. The primary purpose on paper is to have a space to host a blog (where you are probably reading this) and whatever else I might do in the future, but really the purpose was to just get a little bit of exposure in some frontend development and to waste a little bit of time (which has been a huge success!).

### Implementation
I knew basically zero about anything html/css/frontend whatsoever before making this website. From some minimal research on different frontend frameworks, I chose to use SvelteKit, primarily because it has some nice tutorials that I was able to follow pretty closely (see [this blog post by Josh Collinsworth](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)) and because it has support for rendering markdown pages, which I wanted to be able to easily write posts without worrying too much about formatting. In my snooping, I read a friend's website ([bedouch.net](https://bedouch.net)), which made it seem pretty easy to work with (which it indeed has been so far). But maybe my perception of it as easy is just from a lack of experience in any other frontend frameworks -- the grass might be greener in a different pasture, and my little bovine brain is none the wiser.

I also wanted to explore how websites are hosted. I ended up choosing Cloudflare to host this site, primarily because they have a free tier, easy integrations with github (where I keep [the source code](https://github.com/anthonymaltsev/bugmilkshakes.org) for the site), and straight-forward email routing. Again, my simpleton bovine brain might just be ignorant of what could be possible in a different pasture.

As a reward for any human soul that somehow ended up here and chose to read this, here is a fun picture I took of a chicken that I named Peter:
<MDImage src={peter} caption="Peter standing on the edge of a canyon."/>