<template>
  <div class="home">
    <BRow>
      <BCol>
        <PostPage />
      </BCol>
      <BCol>
        <ActionPage />
      </BCol>
    </BRow>
  </div>
</template>

<script>
import PostPage from "./components/Post/PostPage.vue";
import ActionPage from "./components/Action/ActionPage.vue";

export default {
  name: "HomePage",
  props: {},
  data: function() {
    return {};
  },
  components: {
    PostPage,
    ActionPage
  }
};
</script>

<style scoped lang="scss">
  
</style>
