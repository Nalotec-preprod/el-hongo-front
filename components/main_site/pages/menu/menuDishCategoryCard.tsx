import { yellowtail } from "@/components/ui/fonts"
import { DishCategoryT } from "@/types/menu"
import DishCard from "./dishCard"

export default function DishCategorySection({
  category,
}: {
  category: DishCategoryT
}) {
  return (
    <div className="space-y-8">
      {/*
       * --------------------------------------------
       *  Encabezado de la sección
       * --------------------------------------------
       */}
      <div
        className="overflow-hidden rounded-lg"
        style={{
          backgroundImage: "url('/images/plana-loteria/01.jpg')",
          backgroundSize: "cover",
          WebkitBackgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-whiteOverlay py-5">
          <h2
            className={`font-semibold ${yellowtail.className} text-center text-5xl capitalize text-hongo-rustynail-700 md:text-8xl`}
          >
            {category.category}
          </h2>
        </div>
      </div>

      {/*
       * ---------------------------------------
       *  Listado de platos
       * ---------------------------------------
       */}
      <div className="space-y-10 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        {category.dishes.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </div>
  )
}
