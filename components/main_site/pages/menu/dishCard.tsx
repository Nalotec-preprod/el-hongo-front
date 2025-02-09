"use client"

import ModalImage from "@/components/ui/modals/modalImage"
import { DishT } from "@/types/menu"
import { useState } from "react"

export default function DishCard({ dish }: { dish: DishT }) {
  const [showImage, setShowImage] = useState(false)

  return (
    <div
      key={dish.name}
      className="flex items-start justify-start gap-4 md:gap-4"
    >
      {/* Imagen */}
      <div className="my-auto flex h-full shrink-0 items-center justify-center">
        <img
          src={`${dish.imageUrl}`}
          alt="Sincronizadas"
          className="h-14 w-14 shrink-0 rounded-full object-cover object-center shadow-lg md:h-24 md:w-24"
          onClick={() => setShowImage(true)}
        />
      </div>

      {/* Descripcion */}
      <div className="w-full text-sm md:text-base">
        <div className="w-full">
          <div className="flex w-full justify-between font-medium">
            <p className="shrink-0 text-base font-semibold text-hongo-rustynail-800 md:text-lg">
              {dish.name}
            </p>
          </div>
          <div className="text-xs md:text-sm">
            <p>{dish.description}</p>
            <p className="font-semibold text-hongo-rustynail-700">
              {dish.subtitle}
            </p>
          </div>
        </div>

        {/* Precio */}
        {dish.priceVariants && (
          <div className="mt-3 text-xs font-semibold text-hongo-rustynail-900">
            {dish.priceVariants.map((variant) => (
              <p key={variant.description}>
                {variant.description} ${variant.price} MXN
              </p>
            ))}
          </div>
        )}

        {!dish.priceVariants && (
          <p className="mt-3 shrink-0 font-semibold text-hongo-rustynail-800">
            ${dish.price} MXN
          </p>
        )}

        {/* Image preview */}
        <ModalImage
          imageDescription=""
          imageUrl={dish.imageUrl as string}
          isVisible={showImage}
          closeFn={setShowImage}
        />
      </div>
    </div>
  )
}
