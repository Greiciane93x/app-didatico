import axios from "axios";

export default class BlogPostContentRepo{

	/**
	 *
	 * @param {string} blogPostId
	 * @return {Promise<?string>}
	 */
	static async getBlogPostContent(blogPostId){
		const response = await axios.get(`/data/blog-posts/${blogPostId}.md`);
		return response.data;
	}

}