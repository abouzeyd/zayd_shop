<template>
  <div v-show="modal_pannier" class="modal_main">
    <div style="margin-top: 5px">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; align-items: center">
          <h2 style="margin: 0px; flex: 1">Votre Iphone 15</h2>
          <div @click="handleCloseModalPannier" class="close_modal">X</div>
        </div>
      </div>
      <div>
        <h3>a bien été ajouté(e) au panier</h3>
      </div>
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; align-items: center">
          <div>
            <img :src="Iphone15" alt="Iphone15" />
          </div>
          <div style="text-align: left">
            <h3 style="margin-bottom: 5px">Recipe Pour Homme</h3>
            <p style="margin-top: 0px">Quantité : 1</p>
          </div>
        </div>
        <div style="display: flex; align-items: center">
          <a
            @click="handleCloseModalPannier"
            style="
              text-decoration: none;
              margin-right: 12px;
              color: black;
              cursor: pointer;
            "
            >Continuer mes achats</a
          >
          <a href="/fin_commande" class="link">Finaliser ma commande</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Iphone15 from "@/images/iphone15.jpeg";

const props = defineProps({
  modal_pannier: {
    type: Boolean,
    required: true,
  },
  handleCloseModalPannier: {
    type: String,
  },
});
</script>

<style scoped>
.modal_main {
  position: fixed;
  bottom: 305px;
  padding: 60px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(15, 15, 15, 0.2);
  width: 400px;
  border-radius: 5px;
  margin-left: 600px;
  /* transform: translate(-50%, -50%); */
  visibility: visible;
  /* opacity: 0; */
  transition: 0.5s;
}

.modal_main.active {
  top: 50%;
}

.close_modal {
  cursor: pointer;
  border: 0px;
}
.close_modal:hover {
  color: black;
  font-weight: bold;
}

.link {
  background-color: gainsboro;
  padding: 10px;
  text-align: center;
  color: white;
  background-color: rgb(107, 167, 107);
  border: 0px;
  cursor: pointer;
  text-decoration: none;
}
.link:hover {
  background-color: rgb(146, 162, 168);
}
:host {
  background: grey;
}
</style>
