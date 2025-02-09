import Link from "next/link"
import { yellowtail } from "@/components/ui/fonts"
import { StylesT } from "@/types/ui"
import { cn } from "@/lib/utils"

export default function HeroContent({ className }: StylesT) {
  return (
    <div className={cn("text-center text-3xl font-semibold", className)}>
      <p className="uppercase text-gray-200">Restaurante</p>
      <div className="mx-auto w-fit rounded-md border-2 border-black bg-white p-2">
        <img src="/images/hongo-borderless.svg" alt="" className="h-[200px]" />
      </div>

      <p className={`${yellowtail.className} text-hongo-broom-600`}>
        y centro cultural
      </p>
      <div className="mt-8 rounded-md border border-white bg-hongo-broom-900 bg-opacity-80 p-2 text-xl">
        <Link
          href="/menu"
          className="z-0 block h-full w-full uppercase text-gray-200"
        >
          nuestro men&uacute;
        </Link>
      </div>
    </div>
  )
}
