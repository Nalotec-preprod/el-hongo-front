import { getMenu } from "@/actions/menu"
import PagesHero from "../hero"
import { yellowtail } from "@/components/ui/fonts"
import { DishCategoryT, MenuT } from "@/types/menu"
import DishCategorySection from "./menuDishCategoryCard"

export default function Menu() {
  const menu: MenuT = getMenu()

  return (
    <div className="bg-hongo-olivedrab-50 pb-[800px]">
      {/*
       * --------------------------------------
       *  Hero section
       * --------------------------------------
       */}
      <PagesHero imageUrl="/images/menuhero05.jpg">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <p className="text-5xl font-semibold uppercase">men&uacute;</p>
          <p className={`text-2xl font-medium ${yellowtail.className}`}>
            Disfruta de nuestros platillos
          </p>
        </div>
      </PagesHero>

      {/*
       * --------------------------------------
       *   Main content
       * --------------------------------------
       */}

      <div className="mx-auto mt-10 w-fit px-4">
        <div className="space-y-8">
          {/*
           * ---------------------------------------
           * Secciones del Menu
           * ---------------------------------------
           */}
          <div className="space-y-8">
            {menu.categoriesList.map((category) => (
              <DishCategorySection
                key={category.category}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
