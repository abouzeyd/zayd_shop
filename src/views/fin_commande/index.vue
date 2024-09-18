<template>
  <HeaderComptoireVue :handleOpenModal="handleOpenModal" />
  <div style="margin-top: 120px"></div>
  <div style="margin-bottom: 220px"></div>
  <Footer />
  <ModalVue :ActiveModal="ActiveModal" :handleCloseModal="handleCloseModal" />
</template>

<script setup>
import HeaderComptoireVue from "@/components/HeaderComptoire.vue";
import Footer from "@/components/Footer.vue";
import ModalVue from "@/components/Modal.vue";
import { ref } from "vue";

const ActiveModal = ref(false);

const handleOpenModal = () => {
  ActiveModal.value = true;
};
const handleCloseModal = () => {
  ActiveModal.value = false;
};
</script>

<style></style>
