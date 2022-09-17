<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
import Source from "../assets/icon-source.svg"
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
  <div class="text-white px-5 w-4/5 mx-auto pb-10">
    <div class="grid md:grid-cols-2 min-h-screen items-center justify-center gap-3
    ">
      <div class="flex items-center justify-center">
        <img :src="selected.images.planet" alt="" />
      </div>
      <div class="flex flex-col gap-6 text-center md:text-left">
        <h1 class="text-5xl font-semibold">{{ selected.name }}</h1>
        <p class="text-base text-navCol">{{ selected.overview.content }}</p>
        <p class="flex items-center gap-2 text-sm">
          <span>source</span> 
          <a :href="selected.overview.source" class="flex" target="_blank">WIKIPEDIA <Source /></a>
        </p>
      </div>
    </div>
    <div class="grid lg:grid-cols-4 gap-5">
      <div class="border p-4 flex lg:block items-center justify-between ">
        <h4 class="uppercase text-navCol text-base font-semibold">Rotation Time</h4>
        <h3 class="text-2xl font-bold mt-4">{{selected.rotation}}</h3>
      </div>
      <div class="border p-4 flex lg:block items-center justify-between">
        <h4 class="uppercase text-navCol text-base font-semibold">Revolution Time</h4>
        <h3 class="text-2xl font-bold mt-4">{{selected.revolution}}</h3>
      </div>
      <div class="border p-4 flex lg:block items-center justify-between">
        <h4 class="uppercase text-navCol text-base font-semibold">Radius</h4>
        <h3 class="text-2xl font-bold mt-4">{{selected.radius}}</h3>
      </div>
      <div class="border p-4 flex lg:block items-center justify-between">
        <h4 class="uppercase text-navCol text-base font-semibold">Temperature</h4>
        <h3 class="text-2xl font-bold mt-4">{{selected.temperature}}</h3>
      </div>
    </div>
  </div>
</template>

<style></style>
