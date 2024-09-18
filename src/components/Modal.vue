<template>
  <div v-show="ActiveModal" class="modal_main">
    <div style="margin-top: 5px">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; align-items: center">
          <h2 style="margin: 0px; flex: 1">Connectez-vous</h2>
          <div @click="handleCloseModal" class="close_modal">X</div>
        </div>
      </div>
      <div>
        <h3>Vous avez déjà un compte sur Comptoir de l'Homme ?</h3>
      </div>
      <div style="display: flex; flex-direction: column">
        <input
          type="text"
          placeholder="Adresse email"
          style="margin-bottom: 12px; padding: 15px"
        />
        <input
          type="text"
          placeholder="Mot de passe"
          style="padding: 15px; margin-bottom: 12px"
        />
        <button
          type="submit"
          style="
            color: white;
            background-color: black;
            border-radius: 5px;
            padding: 15px;
          "
        >
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  ActiveModal: {
    type: Boolean,
    required: true,
  },
  handleCloseModal: {
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
  width: 900px;
  border-radius: 5px;
  margin-left: 400px;
}

.close_modal {
  cursor: pointer;
  border: 0px;
}
.close_modal:hover {
  color: black;
  font-weight: bold;
}
</style>
