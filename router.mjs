import {createRouter, createWebHistory} from 'vue-router';

// *Pages:
import VHomePage from "./pages/v-home-page.vue";
import VBlogPostPage from "./pages/v-blog-post-page.vue";
import store from "./stores/store.mjs";
import V404Page from "./pages/v-404-page.vue";


// *Building the router:
const router = createRouter({

   history: createWebHistory(),

	strict: false,

   routes: [
      {
         path: '/',
			name: 'home-page',
         component: VHomePage,
			beforeEnter: [loadBlogPosts],
      },
		{
			path: '/posts/:blogPostId',
			name: 'blog-post-page',
			component: VBlogPostPage,
			beforeEnter: [loadBlogPosts],
		},
		{
			path: '/not-found',
			name: 'not-found-page',
			component: V404Page,
			beforeEnter: [loadBlogPosts],
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: to => ({ name: 'not-found-page', query: { p: to.path } }),
			// component: V404Page,
			// beforeEnter: [loadBlogPosts],
		},
   ]
});


async function loadBlogPosts(from, to, next){
	// if(!!store.state.blogPosts.blogPosts?.length) {
	// 	next();
	// 	return;
	// }
	// await store.dispatch('blogPosts/loadAllBlogPosts');
	next();
}




export default router;
