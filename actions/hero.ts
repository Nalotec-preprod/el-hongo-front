import { SlideBgT } from "@/types/hero/heroTypes"

export const getHeroImagesLandingPage = () => {
  const slides: SlideBgT[] = [
    {
      name: "uno",
      bgImageUrl: "/images/restaurant01.jpg",
    },
    {
      name: "dos",
      bgImageUrl: "/images/restaurant02.jpg",
    },
    {
      name: "tres",
      bgImageUrl: "/images/restaurant03.jpg",
    },
    {
      name: "cuatro",
      bgImageUrl: "/images/restaurant04.jpg",
    },
    {
      name: "cinco",
      bgImageUrl: "/images/restaurant05.jpg",
    },
    {
      name: "seis",
      bgImageUrl: "/images/hongo_panoramico_02.webp",
    },
  ]
  return slides
}
