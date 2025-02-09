import { ModalWindowProps } from "@/types/ui"
import ModalWindow from "../modals/modalWindow"

export default function HorariosModal({
  isVisible,
  closeFn,
}: ModalWindowProps) {
  return (
    <ModalWindow isVisible={isVisible} closeFn={closeFn}>
      <div className="space-y-4 text-center font-medium">
        <h2 className="text-xl font-semibold">Horarios</h2>

        <p className="text-gray-500">
          Puedes visitarnos de martes a domingo en los siguientes horarios
        </p>

        <div className="font-normal">
          <p>Martes a s&aacute;bado de 9:00 am. a 4:00 pm</p>
          <p>Domingo de 9:00 am a 3:00 pm</p>
          <p className="text-red-700">Lunes: Cerrado</p>
        </div>

        <p className="text-xl">Te esperamos</p>
      </div>
    </ModalWindow>
  )
}
