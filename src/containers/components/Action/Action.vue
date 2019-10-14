<template>
  <div class="action-body">
    <b-button
      variant="success"
      style="float:right"
      v-on:click="$emit('time-travel', payload.posts, historyIndex)"
    >Time Travel</b-button>
    <div>Moved post {{payload.postId}} from index {{payload.index1}} to index {{payload.index2}}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Action",
  props: {
    payload: Object,
    historyIndex: Number
  }
};
</script>

<style scoped lang="scss">
.action-body {
  text-align: left;
  font-size: 14px;
}
b-button {
  font-size: 14px;
}
</style>
