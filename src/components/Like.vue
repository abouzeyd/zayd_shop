<template>
  <h2 style="margin-left: auto; margin-right: auto; width: 1200px">
    Vous aimerez aussi
  </h2>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      margin-top: 20px;
    "
  >
    <div v-for="slide in carousels" :key="slide?.img">
      <div class="card">
        <div class="card_deals">
          <a :href="slide?.link" style="text-decoration: none">
            <img :src="slide?.img" :alt="slide?.id" class="images" />
            <div>
              <p style="color: black">{{ slide?.title }}</p>
              <p style="font-weight: bold; color: black">
                {{ slide?.prix }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { slider } from "@/data/slider";

const carousels = slider?.filter((item) => item?.img);
</script>

<style scoped>
.card {
  display: flex;
  width: 305px;
}
.card_deals {
  margin-left: 12px;
  margin-right: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px;
}
</style>
