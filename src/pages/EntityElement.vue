<template>
  <h1>{{ name }}</h1>
  <AdditionalInformation :data="entityData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useStore } from "vuex";
import AdditionalInformation from "@/shared/ui/AdditionalInformation.vue";

export default defineComponent({
  name: "EntityElementPage",
  components: { AdditionalInformation },

  data() {
    return {
      entity: "",
      entityData: [] as Array<{ key: string; value: string }>,
      name: "",
      id: 0,
      store: useStore(),
    };
  },

  methods: {
    async fetchEntityElement() {
      this.store.dispatch("setLoading", true);

      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}${this.entity.toLowerCase()}/${
            this.id
          }`
        );

        const keys = Object.keys(data).map((key) =>
          key
            .split("_")
            .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
            .join(" ")
        );

        const values: Array<string | Array<string>> = Object.values(data);

        this.entityData = keys
          .map((key, index) => ({ key, value: values[index].toString() }))
          .map(({ key, value }) => ({
            key,
            value: value.length === 0 ? "No information" : value,
          }));
      } catch {
        console.log("Error");
      } finally {
        this.store.dispatch("setLoading", false);
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

  watch: {
    entityData() {
      this.name = this.entityData.filter(
        (el) => el.key === "Name" || el.key === "Title"
      )[0].value;
    },
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}

@media (max-width: 996px) {
  h1 {
    text-align: center;
  }
}
</style>
