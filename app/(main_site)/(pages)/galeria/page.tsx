import { getHeroImagesLandingPage } from "@/actions/hero"
import HeroFullScreenCarousel from "@/components/ui/hero/heroFullScreenCarousel"

export default function Gallery() {
  const heroBgImages = getHeroImagesLandingPage()

  return (
    <div className="overflow-auto">
      {/*
       * ---------------------------------------
       *   Hero container
       * ---------------------------------------
       */}
      <div className="z-0 flex h-screen items-center justify-center">
        <HeroFullScreenCarousel
          bgImages={heroBgImages}
        ></HeroFullScreenCarousel>
      </div>

      {/*
       * --------------------------------------
       *  Otra secciones
       * --------------------------------------
       */}
      <div className="h-[500px] border border-blue-600 bg-gray-300">
        <p>Otro contenido</p>
      </div>
    </div>
  )
}
