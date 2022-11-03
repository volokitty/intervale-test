<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import Header from "@/widgets/Header.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: { Header },
  setup() {
    const store = useStore();

    onMounted(() => store.dispatch("getEntities"));
  },
};
</script>

<style>
:root {
  --content-width: 1200px;
}

* {
  margin: 0;
}

main {
  max-width: var(--content-width);
  margin: 0 auto;
}
</style>
