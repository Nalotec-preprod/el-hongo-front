import { cn } from "@/lib/utils"
import { StylesT } from "@/types/ui"

export default function HorariosDeAtencion({ className }: StylesT) {
  return (
    <div
      className={cn(
        "border-b border-t border-b-gray-500 border-t-gray-500 px-4 py-2 text-center text-xs font-medium text-gray-400",
        className,
      )}
    >
      <h3 className="text-lg text-gray-200">Horarios de atenci&oacute;n</h3>
      <p>Martes a s&aacute;bado de 9:00 am. a 4:00 pm</p>
      <p>Domingo de 9:00 am a 3:00 pm</p>
    </div>
  )
}
