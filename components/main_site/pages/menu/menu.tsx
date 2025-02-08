import { getMenu } from "@/actions/menu"
import PagesHero from "../hero"
import { yellowtail } from "@/components/ui/fonts"
import { DishCategoryT, MenuT } from "@/types/menu"

export default function Menu() {
  const menu: MenuT = getMenu()

  return (
    <div className="bg-hongo-olivedrab-50 pb-[1200]">
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
            {menu.categoriesList.map((category: DishCategoryT) => (
              <div key={category.category} className="space-y-8">
                <h2
                  className={`font-semibold ${yellowtail.className} text-center text-5xl capitalize text-hongo-rustynail-700`}
                >
                  {category.category}
                </h2>

                {/* Dishcard */}
                {category.dishes.map((dish) => (
                  <div
                    key={dish.name}
                    className="flex items-start justify-start gap-2"
                  >
                    {/* Imagen */}
                    <img
                      src={`${dish.imageUrl}`}
                      alt="Sincronizadas"
                      className="h-14 w-14 shrink-0 rounded-full object-cover object-center"
                    />

                    {/* Descripcion */}
                    <div className="w-full text-sm">
                      <div className="w-full space-y-2">
                        <div className="flex w-full justify-between gap-2 font-medium">
                          <p className="shrink-0">{dish.name}</p>
                          <p className="w-full -translate-y-1 border-b border-dotted border-b-gray-700"></p>
                          <p className="shrink-0 text-hongo-rustynail-800">
                            ${dish.price} MXN
                          </p>
                        </div>
                        <div className="space-y-1 text-xs">
                          <p>{dish.description}</p>
                          <p className="font-semibold text-hongo-rustynail-700">
                            {dish.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
