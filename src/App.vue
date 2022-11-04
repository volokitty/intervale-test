<template>
  <Header />
  <main>
    <router-view />
  </main>
  <LoadingModal />
</template>

<script lang="ts">
import Header from "@/widgets/Header.vue";
import LoadingModal from "@/shared/ui/LoadingModal.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  components: { Header, LoadingModal },
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
  font-family: "Montserrat", sans-serif;
}

main {
  max-width: var(--content-width);
  margin: 0 auto;
}
</style>
