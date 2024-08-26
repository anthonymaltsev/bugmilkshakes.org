// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../../../content/blog_posts/${params.slug}/post.md`);
	const { title, date, tags } = post.metadata;
	const content = post.default;
	
	let assets = import.meta.glob(`$bp/*/*`, {eager:true, query:'?url', import:'default'})
	
	let simple_assets = {};
	for (const [key, val] of Object.entries(assets)) {
		let postslug = key.split("/").slice(-2, -1)[0];
		let assetname = key.split("/").slice(-1)[0];
		if (postslug == params.slug & assetname != "post.md") {
			simple_assets[assetname] = val;
		}
	}
	assets = simple_assets;

	return {
		content,
		title,
		date,
		tags,
		assets
	};
}