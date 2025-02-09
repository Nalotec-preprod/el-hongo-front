import { yellowtail } from "@/components/ui/fonts"
import { StylesT } from "@/types/ui"
import { cn } from "@/lib/utils"

export default function HeroContent({ className }: StylesT) {
  return (
    <div
      className={cn(
        "space-y-2 text-center text-3xl font-semibold md:space-y-6 md:text-6xl",
        className,
      )}
    >
      <p className={`uppercase text-gray-100 ${yellowtail.className}`}>
        Restaurante
      </p>
      <div className="mx-auto w-fit rounded-md border-2 border-black bg-white p-2">
        <img
          src="/images/hongo-borderless.svg"
          alt=""
          className="h-[200px] md:h-[400px]"
        />
      </div>

      <p className={`${yellowtail.className} text-hongo-broom-600`}>
        y centro cultural
      </p>
    </div>
  )
}
