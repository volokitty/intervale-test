<template>
  <div v-if="entities.length === 0">Загрузка...</div>
  <div v-else>{{ entities }}</div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomePage",

  setup() {
    const store = useStore();

    return {
      entities: computed(() => store.state.entities),
    };
  },
};
</script>

<style></style>
