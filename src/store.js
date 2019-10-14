import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    moveHistory: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    switchPosts(state, payload) {
      const {index1, index2} = payload;
      const posts = [...state.posts];
      const item1 = posts[index1];
      posts[index1] = posts[index2];
      posts[index2] = item1;
      const history = {
        index1,
        index2,
        posts: [...state.posts],
        postId: item1.id
      };
      state.moveHistory = [history, ...state.moveHistory];
      state.posts = posts;
    },
    setHistory(state, payload){
      state.moveHistory = payload;
    }
  },
  actions: {
    moveUp (context, index) {
      if(index > 0){
        context.commit('switchPosts', {index1 :index, index2: index -1});
      }
    },
    moveDown (context, index) {
      if(index < 4){
        context.commit('switchPosts', {index1 :index, index2: index +1});
      }
    },
    timeTravel (context, payload ){
      const {moveHistory} = context.state;
      let history = [];
      for(let i=payload.index + 1; i< moveHistory.length; i++){
        history.push(moveHistory[i]);
      }
      context.commit('setHistory', [...history]);
      context.commit('setPosts', [...payload.posts]);
    },
    async getPosts (context) {
      const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
      let posts;
      try{
        const {data} = await axios.get(POSTS_URL);
        posts = data.slice(0,5);
      }
      catch(error){
        posts = [];
      }
      finally{
        context.commit('setPosts', posts);
      }
        
    }
  },
});
