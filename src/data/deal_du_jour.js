import images from "@/images/téléchargement.jpeg";
import samsung from "@/images/samsung.jpeg";
import samsungA15 from "@/images/samsungA15.jpeg";
import samsungA12 from "@/images/samsungA12.jpeg";
import chargeur_samsung from "@/images/chargeur_samsung.jpeg";
import samsung_filaire from "@/images/samsung_filaire.jpeg";

export const deals = [
  {
    id: 1,
    info: "Offre bienvenue",
    link: "/about",
    desc: "Prix exclusif pour vous",
    title: [
      {
        id: 1,
        percent: "-91%",
        link: "/detail",
        img: images,
        prix: "US $14.97",
        name: "Iphone 15",
      },
      {
        id: 2,
        percent: "-80%",
        link: "/detail",
        img: samsung,
        prix: "US $16.79",
        name: "Samsung ultra",
      },
      {
        id: 3,
        percent: "-61%",
        link: "/detail",
        img: samsungA15,
        prix: "US $13.31",
        name: "Samsung Galaxy A15",
      },
    ],
  },
  ,
  {
    id: 2,
    info: "Deal du jour",
    link: "/",
    desc: "",
    title: [
      {
        id: 1,
        percent: "-91%",
        link: "/detail",
        img: samsungA12,
        prix: "US $14.97",
        name: "Chargeur Iphone",
      },
      {
        id: 2,
        percent: "-80%",
        link: "/detail",
        img: chargeur_samsung,
        prix: "US $16.79",
        name: "Chargeur samsung",
      },
      {
        id: 3,
        percent: "-61%",
        link: "/detail",
        img: samsung_filaire,
        prix: "US $13.31",
        name: "Chargeur circulaire",
      },
    ],
  },

  {
    id: 3,
    info: "Nouveau",
    link: "produit",
    desc: "Mis en vente dans les 30 derniers jours",
    title: [
      {
        id: 1,
        percent: "-91%",
        link: "/detail",
        img: images,
        prix: "US $14.97",
      },
      {
        id: 2,
        percent: "-80%",
        link: "/detail",
        img: images,
        prix: "US $16.79",
      },
      {
        id: 3,
        percent: "-61%",
        link: "/detail",
        img: images,
        prix: "US $13.31",
      },
    ],
  },
];
