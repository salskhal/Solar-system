<script setup>
import { ref } from "@vue/reactivity";

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
  <div class="container  overflow-hidden ">
    <div class="sun shared"></div>

    <router-link
      :to="{ name: 'planet', params: { id: link.name } }"
      v-for="(link, index) in links"
      :key="index"
      :class="link.link"
      class="shared"
    ></router-link>
    <div class="stars"></div>
  </div>
</template>
<style scoped>
.container {
  min-height: 100vh;
  position: relative;
}

.shared {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  transition: all 0.25s ease;
}

.sun {
  width: 60px;
  height: 60px;
  box-shadow: 0 0 10px 2px rgb(255 107 0 / 40%),
    0 0 22px 11px rgb(255 203 0 / 13%);
  background: url("@/assets/sun.png");
  background-size: cover;
}

.mercury {
  width: 80px;
  height: 80px;
  border: 1px solid rgba(102, 166, 229, 0.12);
  z-index: 100;
  animation: orbit 7.1867343561s linear infinite;
}

.mercury::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  height: 8px;
  width: 8px;
  background: url("@/assets/planet-mercury.svg");
  background-size: cover;
}

.mercury:hover {
  border: 1px solid #cce0e8;
}

.venus {
  width: 110px;
  height: 110px;
  border: 1px solid rgba(102, 166, 229, 0.12);
  z-index: 99;
  animation: orbit 18.4555338265s linear infinite;
}

.venus::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  height: 12px;
  width: 12px;
  background: url("@/assets/planet-venus.svg");
  background-size: cover;
}

.venus:hover {
  border: 1px solid #e29f58;
}

.earth {
  width: 160px;
  height: 160px;
  border: 1px solid rgba(102, 166, 229, 0.12);
  z-index: 98;
  animation: orbit 30s linear infinite;
}

.earth::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  height: 16px;
  width: 16px;
  background: url("@/assets/planet-earth.svg");
  background-size: cover;
}

.earth:hover {
  border: 1px solid #4d53ea;
}

.mars {
  width: 212px;
  height: 212px;
  border: 1px solid rgba(102, 166, 229, 0.12);
  z-index: 97;
  animation: orbit 56.4261314589s linear infinite;
}

.mars::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  height: 12px;
  width: 12px;
  background: url("@/assets/planet-mars.svg");
  background-size: cover;
}

.mars:hover {
  border: 1px solid #f06340;
}

.jupiter {
  width: 360px;
  height: 360px;
  border: 1px solid rgba(102, 166, 229, 0.12);
  z-index: 96;
  animation: orbit 355.7228171013s linear infinite;
}

.jupiter::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  height: 40px;
  width: 40px;
  background: url("@/assets/planet-jupiter.svg");
  background-size: cover;
}

.jupiter:hover {
  border: 1px solid #d99f70;
}

.saturn {
  width: 470px;
  height: 470px;
  animation: orbit 882.6952471456s linear infinite;
  z-index: 95;
  border: 1px solid rgba(102, 166, 229, 0.12);
}

.saturn::before {
  width: 55px;
  height: 40px;
  background-image: url("@/assets/planet-saturn.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
}

.saturn:hover {
  border: 1px solid #e8bb62;
}

.uranus {
  width: 550px;
  height: 550px;
  border: 1px solid rgba(102, 166, 229, 0.12);
  animation: orbit 2512.4001967933s linear infinite;
  z-index: 94;
}

.uranus::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  width: 20px;
  height: 20px;
  background-image: url("@/assets/planet-uranus.svg");
  background-size: cover;
}

.uranus:hover {
  border: 1px solid #65f0d5;
}

.neptune {
  width: 660px;
  height: 660px;
  animation: orbit 4911.7838624549s linear infinite;
  z-index: 93;
  border: 1px solid rgba(102, 166, 229, 0.12);
}

.neptune::before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  width: 20px;
  height: 20px;
  background-image: url("@/assets/planet-neptune.svg");
  background-size: cover;
}

.neptune:hover {
  border: 1px solid #4374e6;
}

.stars {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(102, 166, 229, 0.12);
  border-radius: 1000px;
  transform: translate(-50%, -50%);
  height: 330px;
  width: 330px;
  opacity: 0.7;
  border-color: transparent;
  overflow: hidden;
  animation: orbit 110.9558282773s linear infinite;
  background: url("@/assets/background-stars.svg");
}

/* .stars::before{
    position: absolute;
    content: '';
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    top: 50%;
    height: 210px;
    width: 210px;
    background: transparent;
    border-radius: 140px !important;
    background: url("/assets/background-stars.svg");
} */

@keyframes orbit {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

</style>
