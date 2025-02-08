import { permanentMarker } from "./fonts"

export default function HongoTextLogo() {
  return (
    <p
      className={`capitalize ${permanentMarker.className} p-0 text-center text-2xl font-bold leading-none tracking-widest text-gray-200 md:text-3xl lg:text-5xl`}
    >
      el hongo
    </p>
  )
}
