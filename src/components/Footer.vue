<template>
  <div
    style="
      margin-left: auto;
      margin-right: auto;
      width: 1200px;
      margin-top: 52px;
    "
  >
    <hr />
    <p>
      Notre sélection spéciale entretien barbe : huile à barbe, brosse a barbe,
      savon à barbe Sur Comptoir de l’Homme, nous sommes fiers de vous présenter
      les meilleurs produits disponibles sur les marchés du cosmétique, du
      parfum et du rasage pour homme. En effet, entretenir sa barbe est
      aujourd’hui devenu une des principales préoccupations des hommes. C’est
      pourquoi nos équipes ont préparé pour vous une sélection spéciale
      entretien barbe composée de produits tous plus efficaces les uns que les
      autres. Retrouvez sur notre site tout le nécessaire pour entretenir sa
      barbe : huile à barbe, brosse à barbe, peigne à barbe, savon à barbe, kit
      entretien barbe… Pour des poils toujours plus soyeux et doux, découvrez
      notre gamme spéciale entretien barbe sur Comptoir de l’Homme. Chaque homme
      a son propre rituel, mais voici nos conseils pour entretenir sa barbe en
      toute simplicité. Tout d’abord, commencez par prendre soin de votre barbe
      en évitant les nœuds avec une brosse a barbe ou un peigne à barbe selon
      votre préférence. Le brossage est indispensable pour que vos poils ne
      partent pas dans tous les sens et que votre barbe ait un aspect soigné et
      bien entretenu. Ensuite, utilisez un savon à barbe ou un shampoing spécial
      barbe deux à trois par semaine pour un poil sain et parfumé. Le poil de
      barbe est différent du cheveu, c’est pourquoi il est essentiel de choisir
      un shampoing ou un savon adapté. Enfin, prenez soin de votre barbe au
      quotidien en utilisant une huile à barbe. Elle vous permettra d’hydrater
      vos poils et de prévenir le dessèchement de votre peau. Nous vous
      proposons sur notre site de grandes marques comme Proraso, Apothecary 87
      et Ma Belle Barbe, spécialistes de l’huile à barbe, mais également de tous
      les autres produits nécessaires pour entretenir sa barbe. Vous pouvez
      également retrouver parmi notre sélection spéciale entretien barbe,
      d’autres produits tels que des ciseaux à barbe, kit entretien barbe, cire
      à moustache et bien plus encore.N’hésitez plus et faites-vous plaisir avec
      une huile, un savon, une brosse ou n’importe quel autre produit pour
      entretenir sa barbe ! Profitez de la livraison gratuite dès 60€ d’achats
      tout au long de l’année pour prendre de bonnes habitudes au quotidien avec
      notre sélection d’entretien barbe !
    </p>
  </div>
  <div style="display: flex; justify-content: center; margin-bottom: 25px">
    <div style="margin-right: 22px">
      <img :src="twitter" :alt="twitter" style="width: 30px; height: 30px" />
    </div>
    <div style="margin-right: 22px">
      <img :src="facebook" :alt="facebook" style="width: 30px; height: 30px" />
    </div>
    <div style="margin-right: 22px">
      <img
        :src="instagram"
        :alt="instagram"
        style="width: 30px; height: 30px"
      />
    </div>
    <div style="margin-right: 22px">
      <img :src="youtube" :alt="youtube" style="width: 30px; height: 30px" />
    </div>
  </div>
  <div class="card_white">
    <div>
      <h3 style="color: rgb(2, 2, 2)">Paiement sécurisé</h3>
    </div>
    <div>
      <h3 style="color: rgb(4, 4, 4)">Service Commande</h3>
      <p style="width: 370px; color: rgb(1, 1, 1)">
        0890 213 312 Du lundi au vendredi de 8h à 20h, le samedi de 9h à 18h et
        le dimanche de 10h à 18h. 0,30€ TTC/min depuis un poste fixe
      </p>
    </div>
    <div>
      <h3 style="color: rgb(6, 5, 5)">Contrat qualité +</h3>
      <p style="width: 370px; color: rgb(14, 13, 13)">
        Les Meilleurs Produits Les Meilleures Offres Le Meilleur Service La
        Meilleure Information
      </p>
    </div>
  </div>
  <div class="footer">
    <div>
      <h3>Paiement sécurisé</h3>
      <div style="display: flex; justify-content: space-around">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>
    <div>
      <h3>Service Commande</h3>
      <p class="paragraphe">
        0890 213 312 Du lundi au vendredi de 8h à 20h, le samedi de 9h à 18h et
        le dimanche de 10h à 18h. 0,30€ TTC/min depuis un poste fixe
      </p>
    </div>
    <div>
      <h3>Contrat qualité</h3>
      <p class="paragraphe">
        Les Meilleurs Produits Les Meilleures Offres Le Meilleur Service La
        Meilleure Information
      </p>
    </div>
  </div>
</template>

<script setup>
import twitter from "@/images/twitter.png";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import youtube from "@/images/youtube.jpg";
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: black;
  padding-bottom: 210px;
}
.paragraphe {
  width: 412px;
}

.card_white {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  box-shadow: 0 4px 8px 0 rgba(15, 15, 15, 0.2);
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 122px;
  padding: 12px;
  text-align: center;
}
</style>
