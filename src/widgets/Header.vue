<template>
  <header>
    <div class="content">
      <RouterLink to="/">Home</RouterLink>
    </div>
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
  display: flex;
  align-items: center;
  max-width: var(--content-width);
  margin: 0 auto;
  height: 100%;
}

@media (max-width: 996px) {
  .content a {
    margin: 0 auto;
  }
}
</style>
