import Navbar from "../navbar/navbar"
import HongoTextLogo from "@/components/ui/textLogo"

export default function Header() {
  return (
    <header className="fixed top-0 w-full py-2">
      {/*
        <header className="fixed top-0 w-full bg-gradient-to-b from-hongo-rustynail-500 to-hongo-rustynail-600 py-2 shadow-lg">}
    */}

      {/* Header container */}
      <div className="relative mx-auto flex w-full items-center justify-between px-8 xl:max-w-[1280px]">
        {/* Logo */}
        <div className="z-10 flex w-fit items-center justify-center gap-2">
          <img
            src="/images/hongo-borderless.svg"
            alt=""
            className="h-[36px] w-[36px] rounded-md bg-hongo-broom-400 object-cover p-0.5 shadow-lg md:h-[80px] md:w-auto md:rounded-md md:bg-white"
          />

          <HongoTextLogo />
        </div>

        <Navbar />
      </div>
    </header>
  )
}
