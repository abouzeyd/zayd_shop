<template>
  <div class="grid-container">
    <div v-for="information in data" :key="information.id" class="grid-card">
      <img :src="information.img" :alt="information.img" class="images" />
      <router-link
        :to="information.link"
        style="text-decoration: none; color: rgb(11, 10, 10)"
      >
        <h3>{{ information.title }}</h3>
        <p>{{ information.desc }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { data } from "@/data/data";
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
}

.grid-card {
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  padding: 5px;
}
.images {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
}
</style>
