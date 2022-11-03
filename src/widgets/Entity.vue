<template>
  <RouterCard :text="entityName" @routerCardClick="click" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RouterCard from "@/shared/ui/RouterCard.vue";

export default defineComponent({
  name: "EntityWidget",
  props: {
    entityName: String,
  },
  components: { RouterCard },

  methods: {
    click(entityName: string) {
      this.$router.push(`/${entityName.toLowerCase()}?page=1`);
    },
  },
});
</script>
