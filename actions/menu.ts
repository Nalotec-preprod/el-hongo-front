import { MenuT } from "@/types/menu"

export const getMenu = () => {
  const menu: MenuT = {
    categoriesList: [
      {
        category: "desayunos",
        dishes: [
          {
            name: "Sincronizadas",
            subtitle: "Asincronizadamente ricas.",
            description:
              "Sincronizadas con tortilla de harina, calabacitas, zanahorias, aceitunas y queso oaxaca, bañadas en salsa de tomate y crema de perejil.",
            imageUrl: "/images/sincronizadas.jpg",
            price: 95,
          },
          {
            name: "Huevos rancheros",
            subtitle: "Sencillo y sabroso.",
            description:
              "Tortilla frita bañada en salsa roja con huevo estrellado",
            imageUrl: "/images/huevosrancheros.jpg",
            price: 95,
          },
          {
            name: "Chilaquiles",
            subtitle: "",
            description:
              "Tortilla crocante bañada en salsa roja o verde con huevo",
            imageUrl: "/images/chilaquiles.jpg",
            price: 120,
          },
          {
            name: "Picaditas",
            subtitle: "Mmmmm... muy buenas",
            description: "Cuatro mixtas con frijoles, salsa roja y pollo.",
            imageUrl: "/images/menuhero03.jpg",
            price: 95,
          },
        ],
      },
    ],
  }

  return menu
}
