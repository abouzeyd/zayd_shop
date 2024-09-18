<template>
  <h2 style="margin-left: auto; margin-right: auto; width: 1200px">
    Explorer les catégories
  </h2>
  <Vue3Marquee>
    <img height="200" width="200" :src="pantalon_noir" class="img" />
    <img height="200" width="200" :src="pantalon_maron" class="img" />
    <img height="200" width="200" :src="pantalon_sport" class="img" />
    <img height="200" width="200" :src="pantalon_blanc" class="img" />
    <img height="200" width="200" :src="pantalon_guine" class="img" />
    <img height="200" width="200" :src="pantalon_guine" class="img" />
    <img height="200" width="200" :src="pantalon_noir" class="img" />
    <img height="200" width="200" :src="pantalon_maron" class="img" />
    <img height="200" width="200" :src="pantalon_sport" class="img" />
    <img height="200" width="200" :src="pantalon_blanc" class="img" />
    <img height="200" width="200" :src="pantalon_guine" class="img" />
    <img height="200" width="200" :src="pantalon_guine" class="img" />
  </Vue3Marquee>
</template>

<script setup>
import { Vue3Marquee } from "vue3-marquee";
import pantalon_noir from "@/images/pantalon_noir.jpeg";
import pantalon_maron from "@/images/pantalon_maron.jpeg";
import pantalon_sport from "@/images/pantalon_sport.jpeg";
import pantalon_blanc from "@/images/pantalon_blanc.jpeg";
import pantalon_guine from "@/images/pantalon_guine.jpeg";
</script>

<style scoped>
.img {
  border-radius: 50%;
  margin-right: 10px;
}
</style>
