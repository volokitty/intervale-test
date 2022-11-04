<template>
  <div class="entities">
    <Entity
      class="entity"
      v-for="entity in $store.state.entities"
      :key="entity"
      :entity-name="entity"
    />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Entity from "@/widgets/Entity.vue";

export default {
  name: "HomePage",
  components: { Entity },

  mounted() {
    const store = useStore();

    store.dispatch("getEntities");
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
