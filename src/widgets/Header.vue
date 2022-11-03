<template>
  <header>
    <div class="content">header</div>
  </header>
</template>

<script lang="ts">
export default {
  name: "HeaderWidget",
};
</script>

<style scoped>
header {
  height: 40px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 24px;
}

.content {
  max-width: var(--content-width);
  margin: 0 auto;
}
</style>
