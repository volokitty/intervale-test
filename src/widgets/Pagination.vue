<template>
  <div class="pagination">
    <div
      class="item"
      v-for="item in count"
      :key="item"
      :class="{ active: active === item }"
      @click="changePage(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationWidget",
  props: {
    count: Number,
    active: Number,
  },

  methods: {
    changePage(page: number) {
      this.$emit("changePage", page);
    },
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  margin-bottom: 24px;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid lightgray;
  border-radius: 14px;
  cursor: pointer;
  margin-right: 12px;
  font-size: 12px;
}

.active {
  border: 1px solid teal;
}

@media (max-width: 996px) {
  .pagination {
    justify-content: center;
  }
}
</style>
