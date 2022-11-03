<template>
  <div v-if="loading">Loading...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default defineComponent({
  name: "EntityElementPage",

  data() {
    return {
      entity: "",
      id: 0,
      loading: false,
    };
  },

  methods: {
    async fetchEntityElement() {
      this.loading = true;

      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}${this.entity.toLowerCase()}/${
            this.id
          }`
        );

        console.log(data);
      } catch {
        console.log("Error");
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    const route = useRoute();
    const { entity, id } = route.params;

    this.entity = `${entity[0].toUpperCase()}${entity.slice(1)}`;
    this.id = Number(id);

    this.fetchEntityElement();
  },
});
</script>

<style></style>
