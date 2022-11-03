<template>
  <RouterCard :text="entityElementName" @routerCardClick="click" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RouterCard from "@/shared/ui/RouterCard.vue";

export default defineComponent({
  name: "EntityElementWidget",
  props: {
    entityElementName: String,
    entityElementId: String,
  },
  components: { RouterCard },

  methods: {
    click() {
      const { entity } = this.$route.params;

      this.$router.push(`/${entity}/${this.entityElementId}`);
    },
  },
});
</script>

<style></style>
