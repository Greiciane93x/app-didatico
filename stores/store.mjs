import Vuex from 'vuex';
import ChallengesStore from "./challenges-store.mjs";


const VuexStore = Vuex.createStore({

	strict: false,


   state: () => ({

   }),


	mutations: {

	},


   modules: {
		ChallengesStore: ChallengesStore,
   },

});


export default VuexStore;
