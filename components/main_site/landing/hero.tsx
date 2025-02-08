import DirectionsGPS from "./directions"
import HorariosDeAtencion from "./horarios"
import Slide1 from "./slides/slide1"

export default function Hero() {
  return (
    <div className="bg-heroBg bg-cover bg-center bg-no-repeat text-sm text-gray-200">
      <div className="bordert flex h-screen w-full flex-col items-center justify-between border-t-white bg-heroBlackOverlay pt-[70px] md:pt-[100px]">
        <HorariosDeAtencion />
        <Slide1 />
        <DirectionsGPS />
      </div>
    </div>
  )
}
