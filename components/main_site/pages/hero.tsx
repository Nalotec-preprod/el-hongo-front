import { ReactNode } from "react"

interface PagesHeroProps {
  imageUrl: string
  children: ReactNode
}

export default function PagesHero({ imageUrl, children }: PagesHeroProps) {
  return (
    <div>
      <div
        className="h-[300px] w-full text-gray-200 md:h-[500px]"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-heroBlackOverlay">{children}</div>
      </div>
    </div>
  )
}
