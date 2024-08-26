// import {getAssetUrl} from "$lib/utils";

// src/routes/blog/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	const covers = import.meta.glob(["$bp/*/cover.jpg", "$bp/*/cover.png"], {eager:true, query:'?url', import:'default'})

	for(const post of posts) {
		let img = covers["/src/content/blog_posts/" + post.slug + "/cover.jpg"];
		if (!img) {
			img = covers["/src/content/blog_posts/" + post.slug + "/cover.png"];
		}
		post.meta.featureImage = img;
	}

	return {
		posts
	};
};