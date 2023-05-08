import {TypeUtils} from "@potentii/type-utils";
import BlogPost from "../model/blog-post.mjs";
import BlogPostsRepo from "../repos/blog-posts-repo.mjs";


const BlogPostsStore = {

	namespaced: true,



	state: () => ({
		/**
		 * @type {BlogPost[]}
		 */
		blogPosts: [],
	}),



	getters: {

		/**
		 *
		 * @param state
		 * @return {(string) => ?BlogPost}
		 */
		getBlogPostById: state => blogPostId => state.blogPosts.find(blogPost => blogPost.id == blogPostId),

		/**
		 *
		 * @param state
		 * @return {function(): string[]}
		 */
		allTags: state => () => [...new Set(state.blogPosts.flatMap(blogPost => blogPost.tags))],

	},



	mutations: {

		/**
		 *
		 * @param state
		 * @param {BlogPost[]} blogPosts
		 * @private
		 */
		_setBlogPosts(state, blogPosts){
			TypeUtils.instanceOf.checkArray('BlogPostsStore._setBlogPosts.blogPosts', blogPosts, BlogPost, true, true);
			state.blogPosts = blogPosts;
		},

	},



	actions: {

		async loadAllBlogPosts({ dispatch, commit, getters, rootGetters }){
			const blogPosts = await BlogPostsRepo.getAll();
			commit(`_setBlogPosts`, blogPosts);
		},

	},

};



export default BlogPostsStore;