<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import data from "../data.json";

const allData = data;

const selected = computed(() => {
  return allData.find((item) => item.name == props.id);
});

onMounted(() => {
  document.title = "Planet " + props.id;
});

const props = defineProps({
  id: { type: String },
});


</script>
<template>
  <div class="text-white px-5">
    <div class="grid md:grid-cols-2 min-h-screen items-center justify-center gap-3
    ">
      <div class="flex items-center justify-center">
        <img :src="selected.images.planet" alt="" />
      </div>
      <div>
        <h1>{{ selected.name }}</h1>
        <p>{{ selected.overview.content }}</p>
        <p>
          source
          <a :href="selected.overview.source" target="_blank">WIKIPEDIA</a>
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style></style>
