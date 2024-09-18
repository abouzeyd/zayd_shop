<template>
  <nav
    style="
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
    "
  >
    <div style="display: flex">
      <router-link to="/solutions">Find an Idea</router-link>
      <router-link to="/prix">Starting Up</router-link>
      <router-link to="/ressources">Marketing</router-link>
      <router-link to="/qui-sommes-nous">Latest</router-link>
      <div style="margin-left: 330px">
        <router-link to="/ressources">Login</router-link>
        <router-link
          to="/qui-sommes-nous"
          style="background-color: rgb(15, 16, 16); padding: 15px; color: white"
          >Essaie gratuire</router-link
        >
      </div>
    </div>
  </nav>
  <Header />
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style></style>
