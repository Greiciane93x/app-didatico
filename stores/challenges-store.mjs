import {TypeUtils} from "@potentii/type-utils";
import BlogPost from "../model/blog-post.mjs";
import BlogPostsRepo from "../repos/blog-posts-repo.mjs";
import Challenge from "../model/challenge.mjs";


const ChallengesStore = {

	namespaced: true,



	state: () => ({
		/**
		 * @type {Challenge[]}
		 */
		challenges: [
			new Challenge('banana', 'ba__na', '#988d65', '#808778', 'https://cdn.awsli.com.br/1000x1000/18/18885/produto/102523124/6ba7072878.jpg'),
			new Challenge('abacate', 'aba__ate', '#897123','#948320', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/174/441/products/21-e75d390490c2c79b7915122895261424-1024-1024.webp'),
			new Challenge('queijo', '___ijo', '#789798', '#989855','https://d3ugyf2ht6aenh.cloudfront.net/stores/738/706/products/queijo-parmesao-premium-fracionado1-2be9dd2eed2968340f16451759677838-640-0.jpg'),
		],
		/**
		 * @type {number}
		 */
		currentChallengeIndex: 0,
	}),


	getters: {

		/**
		 *
		 * @param state
		 * @return {Challenge}
		 */
		currentChallenge: state => state.challenges[state.currentChallengeIndex],
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



export default ChallengesStore;