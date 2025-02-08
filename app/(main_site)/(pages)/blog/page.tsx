import { getMenu } from "@/actions/menu"
import DishCategorySection from "@/components/main_site/pages/menu/menuDishCategoryCard"
import { DishCategoryT } from "@/types/menu"

export default function Blog() {
  const menu = getMenu()

  return (
    <div className="h-screen">
      <div className="flex h-full w-full items-center justify-center gap-8">
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
              {menu.categoriesList.map((category: DishCategoryT) => (
                <DishCategorySection
                  category={category}
                  key={category.category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
