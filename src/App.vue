<script setup>
import Nav from "./components/Nav.vue";
import Tnav from "./components/Tnav.vue";
</script>

<template >
  <div class="body">
    <Nav />
    <!-- <Tnav /> -->
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
  min-height: 100vh;
  background-color: rgb(23, 21, 21);
  background-image: url("@/assets/background-stars.svg");
}
</style>
