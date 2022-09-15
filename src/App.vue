<script setup>
import Nav from "./components/Nav.vue";
</script>

<template >
  <div class="body">
    <Nav />
    <RouterView />
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  background-size: cover;
  background-color: hsl(240,67%,8%);
  background-image: url("@/assets/background-stars.svg");
}
</style>
