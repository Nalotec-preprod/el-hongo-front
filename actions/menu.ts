import { DishCategoryT, MenuT } from "@/types/menu"

export const getMenu = () => {
  const menu: MenuT = {
    categoriesList: [desayunos, sopasPastas],
  }

  return menu
}

/**
 * -------------------------------------
 *  Desayunos
 * -------------------------------------
 */
export const desayunos: DishCategoryT = {
  category: "desayunos",
  dishes: [
    {
      name: "Sincroniza",
      subtitle: "Asincronizadamente ricas.",
      description:
        "Sincronizadas con tortilla de harina, calabacitas, zanahorias, aceitunas y queso oaxaca, bañadas en salsa de tomate y crema de perejil.",
      imageUrl: "/images/sincronizadas.jpg",
      price: 95,
    },
    {
      name: "Huevos rancheros",
      subtitle: "Sencillo y sabroso.",
      description: "Tortilla frita bañada en salsa roja con huevo estrellado",
      imageUrl: "/images/huevosrancheros.jpg",
      price: 95,
    },
    {
      name: "Chilaquiles",
      subtitle: "",
      description: "Tortilla crocante bañada en salsa roja o verde con huevo",
      imageUrl: "/images/chilaquiles.jpg",
      priceVariants: [
        {
          description: "Con huevo: ",
          price: 95,
        },
        {
          description: "Con pollo: ",
          price: 110,
        },
        {
          description: "Con pollo y huevo: ",
          price: 120,
        },
      ],
    },
    {
      name: "Picaditas",
      subtitle: "Mmmmm... muy buenas",
      description: "Cuatro mixtas con frijoles, salsa roja y pollo.",
      imageUrl: "/images/menuhero03.jpg",
      price: 95,
    },
    {
      name: "Huevo motuleño",
      description: "Huevo con plátano frito, queso y chicharos.",
      imageUrl: "/images/huevomotuleño2.jpg",
      price: 120,
    },
    {
      name: "Sudadas Xalapeñas",
      description:
        "Tortillas bañadas en salsa roja xalapeña, frijolitos y huevos.",
      imageUrl: "/images/sudadas.jpg",
      price: 95,
    },
    {
      name: "Garnachas",
      description: "Con carne de res, cebolla, papitas con salsa adobada.",
      imageUrl: "/images/garnachas2.jpg",
      price: 95,
    },
  ],
}

const sopasPastas: DishCategoryT = {
  category: "Sopas y pastas",
  dishes: [
    {
      name: "Chileatole",
      description: "Caldo picosito con verduras y orejitas de masa",
      imageUrl: "/images/chileatole.jpg",
      priceVariants: [
        {
          description: "Con res: ",
          price: 130,
        },
        {
          description: "Con camarones: ",
          price: 160,
        },
      ],
    },
  ],
}
