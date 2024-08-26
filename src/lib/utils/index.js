export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/content/blog_posts/*/post.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split("/")[4];
			const postPath = "/blog/" + slug;

			return {
				meta: metadata,
				path: postPath,
				slug: slug
			};
		})
	);

	return allPosts;
};
