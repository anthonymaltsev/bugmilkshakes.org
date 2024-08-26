---
title: This Website
date: '2024-08-22'
tags:
  - Project
---
<script>
  import MDImage from "$components/MDImage.svelte";
  import MDAudio from "$components/MDAudio.svelte";

  export let assets;
</script>

Well, here it is, I made a little [website](/) for little old me. The primary purpose on paper is to have a space to host a blog (where you are probably reading this) and whatever else I might do in the future, but really the purpose was to just get a little bit of exposure in some frontend development and to waste a little bit of time (which has been a huge success!).

### Implementation
I knew basically zero about anything html/css/frontend whatsoever before making this website. From some minimal research on different frontend frameworks, I chose to use SvelteKit, primarily because it has some nice tutorials that I was able to follow pretty closely (see [this blog post by Josh Collinsworth](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)) and because it has support for rendering markdown pages, which I wanted to be able to easily write posts without worrying too much about formatting. In my snooping, I read a friend's website ([bedouch.net](https://bedouch.net)), which made it seem pretty easy to work with. But maybe my perception of it as easy is just from a lack of experience in any other frontend frameworks -- the grass might be greener in a different pasture, and my little bovine brain is none the wiser. There did turn out to be some friction points with svelte, e.g. dynamic asset imports, which were a pain to work with...

I also wanted to explore how websites are hosted. I ended up choosing Cloudflare to host this site, primarily because they have a free tier, easy integrations with github (where I keep [the source code](https://github.com/anthonymaltsev/bugmilkshakes.org) for the site), and straight-forward email routing. Again, my simpleton bovine brain might just be ignorant of what could be possible in a different pasture.

I started by trying to just make all of the styling myself by writing my own css sheets, which was successful before I checked what it looked like on mobile (it looked bad on mobile). This inspired me to come up with my original, proprietary idea -- _mobile first_ development. I ended up using [Bootstrap](https://getbootstrap.com/) to create most of the style on the site.

Overall, I'm pretty happy with how it has turned out, not that it is really done -- I'm sure I'll add other things here or there. If you have any suggestions on things I should do, feel free to email me.

As a reward for any human soul that somehow ended up here and chose to read this, here is a fun picture I took of a chicken that I named Peter:
<MDImage src={assets[`peter.jpg`]} caption="Peter standing on the edge of a canyon." />
And here is Peter's favorite song (I asked):
<MDAudio src={assets[`say_yes.mp3`]} caption="Say Yes - Elliott Smith" />
