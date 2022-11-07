<template>
  <div class="card" @click="cardClick">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RouterCardUI",
  props: {
    text: String,
  },

  methods: {
    cardClick() {
      this.$emit("routerCardClick", this.text);
    },
  },
});
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid lightgray;
  cursor: pointer;
  user-select: none;
}

.card:hover {
  color: white;
  background-color: steelblue;
}
</style>
