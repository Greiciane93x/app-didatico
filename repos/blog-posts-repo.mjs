import axios from "axios";
import BlogPost from "../model/blog-post.mjs";


export default class BlogPostsRepo{


	/**
	 *
	 * @return {Promise<BlogPost[]>}
	 */
	static async getAll(){
		const response = await axios.get(`/data/blog-posts.json`);
		return response.data
			.map(envelope => envelope.data)
			.map(BlogPost.from)
	}


}