<template>
  <div class="entity" @click="$router.push(`/${entityName?.toLowerCase()}`)">
    {{ entityName }}
  </div>
</template>

<script lang="ts">
export default {
  name: "EntityWidget",
  props: {
    entityName: String,
  },
};
</script>

<style scoped>
.entity {
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

.entity:hover {
  color: white;
  background-color: steelblue;
}
</style>
