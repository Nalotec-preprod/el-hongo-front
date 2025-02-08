import HongoTextLogo from "@/components/ui/textLogo"

export default function HeaderLogoLink() {
  return (
    <div className="flex w-fit items-center justify-center gap-2">
      <img
        src="/images/hongo-borderless.svg"
        alt=""
        className="h-[36px] w-[36px] rounded-md bg-hongo-broom-400 object-cover p-0.5 shadow-lg md:h-[80px] md:w-auto md:rounded-md md:bg-white"
      />

      <HongoTextLogo />
    </div>
  )
}
