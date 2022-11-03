<template>
  <div v-if="entities.length === 0">Загрузка...</div>
  <div v-else class="entities">
    <Entity class="entity" v-for="entity in entities" :key="entity">
      {{ entity }}
    </Entity>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Entity from "@/widgets/Entity.vue";

export default {
  name: "HomePage",
  components: { Entity },

  setup() {
    const store = useStore();

    return {
      entities: computed(() => store.state.entities),
    };
  },
};
</script>

<style scoped>
.entities {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.entity {
  margin-bottom: 20px;
}
</style>
