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
export default {
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
};
</script>

<style scoped>
.pagination {
  display: flex;
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
</style>
