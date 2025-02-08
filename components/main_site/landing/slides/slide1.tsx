import Link from "next/link"
import { yellowtail } from "@/components/ui/fonts"

export default function Slide1() {
  return (
    <div className="text-center text-3xl font-semibold">
      <p className="uppercase">Restaurante</p>
      <div className="mx-auto w-fit rounded-md border-2 border-black bg-white p-2">
        <img
          src="/images/elhongo_logo_big_border.jpg"
          alt=""
          className="h-[200px]"
        />
      </div>
      <p className={`${yellowtail.className}`}>y centro cultural</p>
      <div className="mt-4 rounded-md border border-white bg-opacity-10 p-2">
        <Link href="/menu" className="z-0 block h-full w-full uppercase">
          nuestro men&uacute;
        </Link>
      </div>
    </div>
  )
}
