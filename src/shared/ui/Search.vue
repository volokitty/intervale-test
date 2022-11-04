<template>
  <div class="search">
    <input :value="modelValue" @input="updateInput" type="text" />
    <button @click="search">Search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchUI",

  props: {
    modelValue: String,
  },

  methods: {
    updateInput(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    },

    search() {
      this.$emit("search");
    },
  },
});
</script>

<style scoped>
.search {
  display: flex;
  height: 32px;
  margin-bottom: 12px;
}

input {
  border: 1px solid black;
  border-right: none;
}

button {
  border: 1px solid black;
  border-left: none;
  cursor: pointer;
}
</style>
