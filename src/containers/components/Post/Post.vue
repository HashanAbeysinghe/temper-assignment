<template>
  <BRow>
    <BCol>
      <div class="post">
        <BRow>
        <div style="width:100%">
          <div class="btn-div">
            <b-button
              variant="outline-primary"
              v-if="index !== 0"
              v-on:click="$emit('movePost', true, index)"
            >
              <font-awesome-icon icon="arrow-circle-up" />
            </b-button>
            <b-button
              variant="outline-primary"
              v-if="index !== 4"
              v-on:click="$emit('movePost', false, index)"
            >
              <font-awesome-icon icon="arrow-circle-down" />
            </b-button>
          </div>
          <div class="post-name">Post {{ id }}</div>
        </div>
          
        </BRow>
        <BRow></BRow>
        <BRow>
          <div class="post-title">{{ title }}</div>
        </BRow>
        <BRow>
          <div class="post-body">{{ body }}</div>
        </BRow>
      </div>
    </BCol>
  </BRow>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Post",
  props: {
    title: String,
    body: String,
    id: Number,
    index: Number
  },
  data: function() {
    return {};
  },
  methods: {
    ...mapActions({
      moveUp: "moveUp",
      moveDown: "moveDown"
    })
  }
};
</script>

<style scoped lang="scss">
.post-header {
  text-align: left;
  font-size: 18px;
}
.post-title {
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}
.post-body {
  text-align: left;
  font-size: 14px;
}
.post-name {
  text-align: left;
  font-weight: bold;
  font-size: 16px;
}
.btn-div {
  float: right;
}
</style>
