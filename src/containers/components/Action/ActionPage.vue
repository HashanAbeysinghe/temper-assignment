<template>
  <div>
    <div class="title-2">List of actions Commited</div>
    <BListGroup>
      <BListGroupItem v-for="(action, historyIndex) in moveHistory" :key="historyIndex">
        <Action @time-travel="onTimeTravelClick" :payload="action" :historyIndex="historyIndex"></Action>
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Action from "./Action.vue";

export default {
  name: "ActionPage",
  computed: {
    ...mapState({
      moveHistory: state => state.moveHistory
    })
  },
  methods: {
    onTimeTravelClick(posts, index) {
      this.timeTravel({ posts, index });
    },
    ...mapActions({
      moveUp: "moveUp",
      moveDown: "moveDown",
      timeTravel: "timeTravel"
    })
  },
  components: {
    Action
  }
};
</script>

<style scoped lang="scss">
.title-2 {
  text-align: left;
  font-size: 14px;
}
</style>
