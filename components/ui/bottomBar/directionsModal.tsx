import { ModalWindowProps } from "@/types/ui"
import ModalWindow from "../modalWindow"
import Link from "next/link"

export default function DirectionsModal({
  isVisible,
  closeFn,
}: ModalWindowProps) {
  return (
    <ModalWindow isVisible={isVisible} closeFn={closeFn}>
      <div className="w-[500px] max-w-[95vw] space-y-4 rounded-lg bg-white p-8">
        <h2 className="text-center text-xl font-semibold">Direcci&oacute;n</h2>
        <p className="text-sm text-gray-700">
          Calle 19 Sur, entre Calle Diagonal 80 Sur y Calle 85 Sur, Playa del
          Carmen, Quintana Roo, Mexico
        </p>

        <div className="space-y-4 py-10">
          <p className="text-center font-semibold">¿C&oacute;mo llegar?</p>

          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <Link
                href="#"
                className="w-fit rounded-full border border-gray-300 p-2 shadow-lg"
              >
                <img
                  src="/images/google-map-icon.webp"
                  alt=""
                  className="h-10"
                />
              </Link>
              <p className="text-xs">Google Maps</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <Link
                href="#"
                className="w-fit rounded-full border border-gray-300 p-2 shadow-lg"
              >
                <img src="/images/waze-icon-2.png" alt="" className="h-10" />
              </Link>
              <p className="text-xs">Waze</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="button"
            className="rounded-md bg-blue-600 px-4 py-2 text-white"
            onClick={() => closeFn(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </ModalWindow>
  )
}
