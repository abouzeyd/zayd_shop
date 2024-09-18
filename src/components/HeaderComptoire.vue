<template>
  <div style="background: black; padding: 22px">
    <p style="text-align: center; color: white">COMPTOIRE DE L'HOMME</p>
  </div>
  <div class="main">
    <div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          background-color: rgba(117, 127, 137, 0.835);
          padding: 12px;
          color: white;
        "
      >
        <p style="margin-top: 0px; margin-bottom: 0px">
          Vendu(s) et expédié(s) par Comptoir de l'Homme
        </p>
        <p style="margin-left: 152px; margin-top: 0px; margin-bottom: 0px">
          Livré dès le 17/09/2024
        </p>
      </div>
      <div class="image_recipe">
        <div style="display: flex">
          <img
            :src="Iphone15"
            :alt="Iphone15"
            style="width: 100px; height: 100px"
          />
          <div>
            <p style="margin-bottom: 0px">Recipe For Men</p>
            <a href="/" style="text-decoration: none">Iphone 15</a>
          </div>
        </div>
        <div style="display: flex">
          <p>20,00 €</p>
          <p style="margin-left: 22px">Quantitée: 1</p>
        </div>
      </div>
    </div>
    <div style="margin-left: 32px">
      <div style="display: flex; justify-content: space-between; padding: 12px">
        <p style="margin-top: 0px; margin-bottom: 0px">Sous total</p>
        <p style="margin-left: 152px; margin-top: 0px; margin-bottom: 0px">
          20,00 €
        </p>
      </div>

      <div style="display: flex; justify-content: space-between; padding: 12px">
        <p style="margin-top: 0px; margin-bottom: 0px">
          Frais de livraison Total
        </p>
        <p style="margin-left: 152px; margin-top: 0px; margin-bottom: 0px">
          3,99 €
        </p>
      </div>
      <hr />
      <div
        style="
          padding-left: 12px;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          font-weight: bold;
        "
      >
        <p>TOTAL</p>
        <p>23,99 €</p>
      </div>
      <div class="btn">
        <a @click="handleOpenModal" style="text-decoration: none; color: white"
          >JE PASSE MA COMMANDE</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Iphone15 from "@/images/iphone15.jpeg";
import { defineProps } from "vue";

const props = defineProps({
  handleOpenModal: {
    type: String,
  },
});
</script>

<style scoped>
.main {
  display: flex;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-top: 43px;
}

.image_recipe {
  display: flex;
  justify-content: space-between;
}

.btn {
  width: 500px;
  background-color: rgb(19, 224, 156);
  padding: 12px;
  text-align: center;
  cursor: pointer;
}
.btn:hover {
  background-color: black;
}
</style>
