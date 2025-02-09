import NavbarWhite from "../navbar/navbarWhite"
import HeaderLogoLink from "./headerLogoLink"

export default function HeaderWhite() {
  return (
    <header className="fixed top-0 z-20 w-full bg-whiteOverlay">
      <div className="relative h-full w-full">
        <div className="w-full py-2 text-black backdrop-blur-md backdrop-filter">
          <div className="z-10 mx-auto flex items-center justify-between px-8 xl:max-w-[1200px]">
            <HeaderLogoLink />
            <NavbarWhite />
          </div>
        </div>

        <NavbarWhite variant="mobile" />
      </div>
    </header>
  )
}
