<template>
  <carousel :items-to-show="4">
    <slide v-for="slide in carousels" :key="slide?.img">
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
        <div class="display_btn">
          <a :href="slide?.link" class="voir_plus">Voir plus</a>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { slider } from "@/data/slider";

const carousels = slider?.filter((item) => item?.img);
</script>

<style scoped>
.images :hover + .display_btn {
  width: 170px;
  padding: 15px;
  display: block;
}
.card :hover + .display_btn {
  display: block;
  position: fixed;
}
.card_deals {
  margin-left: 12px;
  margin-right: 22px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.voir_plus {
  background-color: rgb(4, 4, 4);
  display: block;
  padding: 7px;
  color: white;
  width: 200px;
  border-radius: 8px;
  margin-left: 27px;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
  border: none;
}

.display_btn {
  display: none;
  transform: translateY(-100%);
  margin-left: 17px;
}
</style>
