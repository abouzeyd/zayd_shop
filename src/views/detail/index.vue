<template>
  <HeaderComponent />
  <div class="main">
    <div class="sous_main">
      <div class="card_image">
        <img
          :src="téléchargement"
          :alt="téléchargement"
          style="
            width: 400px;
            height: 400px;
            background-color: bisque;
            margin-left: 10px;
          "
        />
      </div>
      <div>
        <div>
          <p>Bivouak</p>
          <p>Coffret Barbe</p>
          <p style="background-color: gainsboro; padding: 10px; width: 250px">
            Livré chez vous dès le 12/09/2024
          </p>
        </div>
        <div style="display: flex">
          <div
            style="
              width: 250px;
              border: 1px solid black;
              margin-right: 12px;
              padding: 12px;
              height: 50px;
            "
          >
            <p style="margin: 0px">Par 1</p>
            <p style="margin: 0px; font-weight: bold">44,90 €</p>
          </div>
          <div
            style="
              width: 250px;
              border: 1px solid black;
              margin-right: 12px;
              padding: 12px;
              height: 50px;
            "
          >
            <p style="margin: 0px">Par 2</p>
            <p style="margin: 0px; font-weight: bold; color: red">42,66 €</p>
          </div>
          <div
            style="
              width: 250px;
              border: 1px solid black;
              padding: 12px;
              height: 50px;
            "
          >
            <p style="margin: 0px">Par 3</p>
            <p style="margin: 0px; font-weight: bold; color: red">41,76 €</p>
          </div>
        </div>
        <div style="margin-top: 22px">
          <button @click="handleOpenModalPannier" class="link">
            AJOUTER AU PANIER
          </button>
        </div>
        <div>
          <h3>44,90 €</h3>
          <hr />
          <p>
            Avec cette commande, économisez 2€ sur votre prochaine commande !
            Descriptif : Coffret Barbe - Bivouak Le coffret idéal pour prendre
            soin de votre barbe ! Ce Pack Barbe Bio de la marque Bivouak va vous
            permettre de prendre soin de votre barbe. Il est formulé à partir
            d'éléments biologiques respectueux de votre peau et de votre barbe.
            Il convient à tous les types de peaux. Ce coffret contient : - Une
            huile à barbe de 30ml - Une brosse à barbe L'Huile à Barbe : Elle
            hydrate votre barbe et la peau grâce à sa formule concentrée en
            huiles végétales comme l'Huile de Sésame ou encore l'Huile d'Argan
            et l'Huile de Ricin. L'Huile de Ricin renforce vos poils de barbe.
            Son parfum frais et boisé va vous transporter. La Brosse à Barbe :
            Elle est antistatique et permet de démêler, de coiffer et
            d'uniformiser votre barbe. Ses poils rigides massent la peau,
            enlèvent les peaux mortes et facilitent la repousse des poils. Réf :
            Bi255029-0000 / BIV17
          </p>
        </div>
      </div>
    </div>
    <div style="margin: 12px">
      <h2>Avis Coffret Barbe</h2>
      <div style="display: flex; justify-content: space-between">
        <div class="card_avis">
          <h3>Détails des notations</h3>
          <hr />
          <div style="display: flex; justify-content: space-between">
            <p>5 étoiles :</p>
            <p style="background-color: yellow; width: 200px"></p>
            <p>1</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p>4 étoiles :</p>
            <p style="background-color: rgb(210, 210, 205); width: 200px"></p>
            <p>0</p>
          </div>
        </div>
        <div class="card_avis">
          <h3>Notes moyennes des clients</h3>
          <hr />
          <p>Général</p>
        </div>
        <div class="card_avis">
          <h3>
            Donnez votre avis
            <hr />
            <div style="margin-top: 19px"></div>
            <button
              id="myBtn"
              class="mon_avis"
              @click="handleOpenModal"
              type="button"
            >
              Je donne mon avis
            </button>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  <ModalVue :ActiveModal="ActiveModal" :handleCloseModal="handleCloseModal" />
  <ModalAjoutPannier
    :modal_pannier="modal_pannier"
    :handleCloseModalPannier="handleCloseModalPannier"
  />
</template>

<script setup>
import téléchargement from "@/images/téléchargement.jpeg";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import ModalVue from "@/components/Modal.vue";
import ModalAjoutPannier from "@/components/ModalAjoutPannier.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

const ActiveModal = ref(false);
const modal_pannier = ref(false);

const handleOpenModal = () => {
  ActiveModal.value = true;
};
const handleCloseModal = () => {
  ActiveModal.value = false;
};

const handleOpenModalPannier = () => {
  modal_pannier.value = true;
};
const handleCloseModalPannier = () => {
  modal_pannier.value = false;
};
</script>

<style scoped>
.card_avis {
  box-shadow: 0 4px 8px 0 rgba(15, 15, 15, 0.2);
  border-radius: 3px;
  width: 900px;
  margin-right: 25px;
  padding: 12px;
}
.main {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
}
.sous_main {
  display: flex;
  margin-top: 22px;
}
.card_image {
  box-shadow: 0 4px 8px 0 rgba(15, 15, 15, 0.2);
  border-radius: 3px;
  width: 500px;
  height: 400px;
  padding: 22px;
  margin-right: 25px;
}
.link {
  background-color: gainsboro;
  padding: 10px;
  text-align: center;
  color: white;
  background-color: rgb(107, 167, 107);
  border: 0px;
  cursor: pointer;
}
.link:hover {
  background-color: rgb(146, 162, 168);
}
.mon_avis {
  background-color: gainsboro;
  padding: 12px;
  text-align: center;
  color: white;
  background-color: rgb(107, 167, 107);
  text-decoration: none;
  font-size: 15px;
  border: 0px;
  cursor: pointer;
}
.mon_avis:hover {
  background-color: rgb(146, 162, 168);
}
</style>
