import HeroFullScreenCarousel from "@/components/ui/hero/heroFullScreenCarousel"
import { getHeroImagesLandingPage } from "@/actions/hero"
import HeroContent from "./heroContent"
import BottomBar from "@/components/ui/bottomBar/bottomBar"

export default function Hero() {
  const heroBgImages = getHeroImagesLandingPage()

  return (
    <section>
      {/*
       * ----------------------------------
       *  Hero full screen
       * ----------------------------------
       */}
      <div className="relative h-screen w-full">
        <HeroFullScreenCarousel bgImages={heroBgImages}>
          <div className="flex h-full w-full flex-col items-center justify-between pt-[70px] md:pt-[100px]">
            <HeroContent className="absolute top-2/4 -translate-y-2/4 pt-4" />
          </div>
        </HeroFullScreenCarousel>
        <BottomBar />
      </div>

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
