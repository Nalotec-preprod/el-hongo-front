import { ModalWindowProps } from "@/types/ui"
import ModalWindow from "../modalWindow"
import Link from "next/link"

export default function DirectionsModal({
  isVisible,
  closeFn,
}: ModalWindowProps) {
  return (
    <ModalWindow isVisible={isVisible} closeFn={closeFn}>
      <h2 className="text-center text-xl font-semibold">Direcci&oacute;n</h2>
      <p className="text-sm text-gray-700">
        Calle 19 Sur, entre Calle Diagonal 80 Sur y Calle 85 Sur, Playa del
        Carmen, Quintana Roo, Mexico
      </p>

      <div className="space-y-4 py-5">
        <p className="text-center font-semibold">¿C&oacute;mo llegar?</p>

        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=${process.env.NEXT_PUBLIC_LOCATION_LAT},${process.env.NEXT_PUBLIC_LOCATION_LNG}`}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white shadow-lg"
              target="_blank"
            >
              <img src="/images/google-map-icon.webp" alt="" className="h-10" />
            </Link>
            <p className="text-xs">Google Maps</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={`waze://?ll=${process.env.NEXT_PUBLIC_LOCATION_LAT},${process.env.NEXT_PUBLIC_LOCATION_LNG}&navigate=ye`}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-300 bg-white shadow-lg"
              target="_blank"
            >
              <img src="/images/waze-icon-2.png" alt="" className="h-10" />
            </Link>
            <p className="text-xs">Waze</p>
          </div>
        </div>
      </div>
    </ModalWindow>
  )
}
