<template>
  <div>
    <div class="title">Sortable Post List</div>
    <BListGroup>
      <BListGroupItem v-for="(post, index) in this.posts" :key="post.id">
        <Post
          @movePost="onMoveClick"
          :body="post.body"
          :title="post.title"
          :id="post.id"
          :index="index"
        ></Post>
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Post from "./Post.vue";

export default {
  name: "PostPage",
  props: {},
  data: function() {
    return {};
  },
  computed: {
    ...mapState({
      posts: state => state.posts
    })
  },
  mounted: async function() {
    await this.getPosts();
  },
  methods: {
    onMoveClick(isMoveUp, index) {
      if (isMoveUp) {
        this.moveUp(index);
      } else {
        this.moveDown(index);
      }
    },
    ...mapActions({
      getPosts: "getPosts",
      moveUp: "moveUp",
      moveDown: "moveDown"
    })
  },
  components: {
    Post
  }
};
</script>

<style scoped lang="scss">
.action-list-body {
  text-align: left;
  font-size: 14px;
}
.title {
  font-size: 22px;
  text-align: left;
}
</style>