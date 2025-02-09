import { cn } from "@/lib/utils"
import { StylesT } from "@/types/ui"
import Link from "next/link"

type DirectionsLinkT = {
  name: string
  icon: string
  iconDescription: string
  href: string
}

export default function DirectionsGPS({ className }: StylesT) {
  const directionLink: DirectionsLinkT[] = [
    {
      name: "GoogleMaps",
      icon: "/images/google-map-icon.webp",
      iconDescription: "",
      href: `https://www.google.com/maps/dir/?api=1&destination=${process.env.NEXT_PUBLIC_LOCATION_LAT},${process.env.NEXT_PUBLIC_LOCATION_LNG}`,
    },
    {
      name: "Waze",
      icon: "/images/waze-icon-2.png",
      iconDescription: "",
      href: `waze://?ll=${process.env.NEXT_PUBLIC_LOCATION_LAT},${process.env.NEXT_PUBLIC_LOCATION_LNG}&navigate=yes`,
    },
  ]

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 pb-6 text-sm font-semibold text-gray-200",
        className,
      )}
    >
      <p className="text-lg">¿C&oacute;mo llegar?</p>
      <div className="flex items-center justify-center gap-4">
        {directionLink.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="rounded-full border-2 border-gray-200 p-1"
          >
            <img
              src={link.icon}
              alt={link.iconDescription}
              className="h-7 rounded-full"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
