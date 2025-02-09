"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"
import { SlideBgT } from "@/types/hero/heroTypes"
import { ReactNode } from "react"

interface HeroFullScreenCarouselProps {
  bgImages: SlideBgT[]
  children?: ReactNode
}

export default function HeroFullScreenCarousel({
  bgImages,
  children,
}: HeroFullScreenCarouselProps) {
  return (
    <Swiper
      loop={true}
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 3000 }}
      effect="fade"
      className="h-screen w-full"
    >
      {bgImages &&
        bgImages.map((slide) => (
          <SwiperSlide
            key={slide.name}
            className="h-full w-full"
            style={{
              backgroundImage: `url(${slide.bgImageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              WebkitBackgroundSize: "cover",
            }}
          >
            <div className="h-full w-full bg-heroBlackOverlay">{children}</div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
