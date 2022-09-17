<script setup>
import { ref } from "@vue/reactivity";
import Hamburger from "../assets/icons/hamburger.svg";
import Close from "../assets/icons/close.svg";

let links = ref([
  { name: "Mercury", link: "mercury" },
  { name: "Venus", link: "venus" },
  { name: "Earth", link: "earth" },
  { name: "Mars", link: "mars" },
  { name: "Jupiter", link: "jupiter" },
  { name: "Saturn", link: "saturn" },
  { name: "Uranus", link: "uranus" },
  { name: "Neptune", link: "neptune" },
]);
</script>
<template>
  <nav class="px-10 py-6 flex items-center border-b border-navBod">
    <h1 class="text-2xl text-white font-semibold">
      <router-link to="/">THE PLANETS</router-link>
    </h1>
    <ul
      class="ml-auto md:flex gap-5 text-navCol text-base uppercase font-medium hidden"
    >
      <li
        v-for="(link, index) in links"
        :key="index"
        class="hover:text-white hover:border-t"
        :class="link.link"
      >
        <router-link :to="{ name: 'planet', params: { id: link.name } }">{{
          link.name
        }}</router-link>
      </li>
    </ul>
    <Hamburger class="w-10 md:hidden ml-auto cursor-pointer" />
    <!-- <div class="overlay ">
      <Close class="absolute top-5 right-5 w-10"/>
      <ul
      class="mt-20 px-10 flex
       flex-col gap-10"
    >
      <li
        v-for="(link, index) in links"
        :key="index"
        class=" flex gap-3 items-center"
      >
      <span class="w-3 h-3 rounded-full bg-white block"></span>
        <router-link :to="{ name: 'planet', params: { id: link.name } }">{{
          link.name
        }}</router-link>
      </li>
    </ul>
    </div> -->
  </nav>
</template>

<style scoped>

.overlay {
  width: 100%;
  height: 100vh;
  background: pink;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 10000;
}

@media (min-width: 768px) {
  .overlay {
    display: none;
  }
}
.mercury:hover {
  border-top: 3px solid #cce0e8;
}

.venus:hover {
  border-top: 3px solid #e29f58;
}

.earth:hover {
  border-top: 3px solid #4d53ea;
}

.mars:hover {
  border-top: 3px solid #f06340;
}

.jupiter:hover {
  border-top: 3px solid #d99f70;
}

.saturn:hover {
  border-top: 3px solid #e8bb62;
}

.uranus:hover {
  border-top: 3px solid #65f0d5;
}

.neptune:hover {
  border-top: 3px solid #4374e6;
}
</style>
