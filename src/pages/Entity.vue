<template>
  <div v-if="loading">Loading...</div>
  <h1>{{ entity }}</h1>
  <div class="entities">
    <EntityElement
      class="entity"
      v-for="entity in entityElements"
      :key="entity.id"
      :entityElementId="entity.id"
      :entityElementName="entity.name"
    />
  </div>
  <Pagination :count="pagesCount" :active="page" @changePage="changePage" />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Pagination from "@/widgets/Pagination.vue";
import EntityElement from "@/widgets/EntityElement.vue";

export default defineComponent({
  name: "EntityPage",
  components: { Pagination, EntityElement },

  data() {
    return {
      pagesCount: 0,
      page: 0,
      entity: "",
      loading: false,
      entityElements: [] as { name: string; id: string | undefined }[],
    };
  },

  methods: {
    async fetchData() {
      this.loading = true;

      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}${this.entity.toLowerCase()}?page=${
            this.page
          }`
        );

        const {
          count,
          results,
        }: {
          count: number;
          results: Array<{ name: string; title: string; url: string }>;
        } = data;

        this.entityElements = results.map(({ name, title, url }) => {
          const id = url.match(/(\d+)/g)?.pop();

          return { name: name || title, id };
        });

        this.pagesCount = Math.ceil(count / 10);
      } catch {
        console.log("Error");
      } finally {
        this.loading = false;
      }
    },

    changePage(page: number) {
      this.$router.replace({ query: { page } });
      this.page = page;
    },
  },

  mounted() {
    const route = useRoute();
    const { page } = route.query;
    const { entity } = route.params;

    this.page = Number(page);
    this.entity = `${entity[0].toUpperCase()}${entity.slice(1)}`;

    this.fetchData();
  },

  watch: {
    page() {
      this.fetchData();
    },
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 28px;
}

.entities {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.entity {
  margin-bottom: 20px;
}
</style>
