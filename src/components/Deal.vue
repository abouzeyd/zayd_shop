<template>
  <HeaderComponent />
  <div>
    <div style="margin-left: auto; margin-right: auto; width: 1200px">
      <div class="deal">
        <div v-for="deal in dataLength" :key="deal?.id" class="card_deals">
          <div style="padding: 29px">
            <h2 v-show="deal?.info">{{ deal?.info }}</h2>
            <p>{{ deal?.desc }}</p>
          </div>
          <div class="bloc_article">
            <div v-for="vente in deal?.title" :key="vente?.id">
              <a :href="vente?.link" style="text-decoration: none">
                <img
                  :src="vente?.img"
                  :alt="vente?.id"
                  style="width: 200px"
                  class="container_price"
                />
                <p class="name_appareil">{{ vente?.name }}</p>
                <p class="para">{{ vente?.prix }}</p>
                <p class="prices">{{ vente?.percent }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Big_saveVue />
    </div>
    <Explorer_categorie />
    <Like />
    <Footer />
  </div>
</template>

<script setup>
import { deals } from "@/data/deal_du_jour";
import Big_saveVue from "./Big_save.vue";
import Like from "@/components/Like.vue";
import Explorer_categorie from "./Explorer_categorie.vue";
import Footer from "@/components/Footer.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
const dataLength = deals?.filter((deal) => deal?.info);
</script>

<style scoped>
.deal {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  gap: 20px;
  margin-bottom: 22px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
}
.card_deals {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.para {
  text-align: center;
  font-weight: bold;
}
.prices {
  text-align: center;
  font-weight: bold;
  color: rgb(215, 39, 39);
}
.bloc_article {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.name_appareil {
  color: black;
  text-align: center;
}
.container_price {
  transition-duration: 1000ms;
}
.container_price:hover {
  transform: scale(0.7);
}
</style>
