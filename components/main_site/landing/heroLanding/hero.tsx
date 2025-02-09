import HeroFullScreenCarousel from "@/components/ui/hero/heroFullScreenCarousel"
import DirectionsGPS from "./directions"
import HorariosDeAtencion from "./horarios"
import { getHeroImagesLandingPage } from "@/actions/hero"
import HeroContent from "./heroContent"

export default function Hero() {
  const heroBgImages = getHeroImagesLandingPage()

  return (
    <section>
      {/*
       * ----------------------------------
       *  Hero full screen
       * ----------------------------------
       */}
      <HeroFullScreenCarousel bgImages={heroBgImages}>
        <div className="relative flex h-full w-full flex-col items-center justify-between pt-[70px] md:pt-[100px]">
          <HorariosDeAtencion className="absolute top-[70px] md:top-[100px]" />
          <HeroContent className="absolute top-2/4 -translate-y-2/4 pt-4" />
          <DirectionsGPS className="absolute bottom-6" />
        </div>
      </HeroFullScreenCarousel>

      {/*
       * ----------------------------------
       *  Contenido
       * ----------------------------------
       */}
      <div className="flex h-[800px] items-center justify-center">
        <p className="text-5xl uppercase text-gray-200">contenido</p>
      </div>
    </section>
  )
}
