import Navbar from "../navbar/navbar"
import HeaderLogoLink from "./headerLogoLink"

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full bg-headerOverlay">
      <div className="relative h-full w-full">
        <div className="w-full py-2 backdrop-blur-md backdrop-filter">
          <div className="z-10 mx-auto flex items-center justify-between px-8 xl:max-w-[1200px]">
            <HeaderLogoLink />
            <Navbar />
          </div>
        </div>

        <Navbar variant="mobile" />
      </div>
    </header>
  )
}
