<template>
  <table>
    <tr v-for="row in data" :key="row.key">
      <td>{{ row.key }}</td>
      <td>{{ row.value }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AdditionalInformationUI",
  props: {
    data: Array as PropType<Array<{ key: string; value: string }>>,
  },
});
</script>

<style scoped>
table {
  width: 100%;
  table-layout: fixed;
  border: 1px solid black;
  border-collapse: collapse;
}

tr,
td {
  word-wrap: break-word;
  border: 1px solid black;
}

@media (max-width: 996px) {
  table {
    padding: 0 20px;
  }
}
</style>
