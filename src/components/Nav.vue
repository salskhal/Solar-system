<script setup>
import { ref } from "@vue/reactivity";

let links = ref([
  { name: "Mercury", link: "#home" },
  { name: "Venus", link: "#about" },
  { name: "Earth", link: "#skills" },
  { name: "Mars", link: "#projects" },
  { name: "Jupiter", link: "#connect" },
  { name: "Saturn", link: "#connect" },
  { name: "Uranus", link: "#connect" },
  { name: "Neptune", link: "#connect" },
]);
</script>
<template>
  <nav class="px-10 py-6 flex items-center border-b border-navBod">
    <h1 class="text-2xl text-white font-semibold">
      <router-lin to="/">THE PLANETS</router-lin>
    </h1>
    <ul class="ml-auto md:flex gap-5 text-navCol text-base uppercase font-medium hidden">
      <li v-for="(link, index) in links" :key="index" class="hover:text-white">
        <router-link :to="link.link">{{link.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>

