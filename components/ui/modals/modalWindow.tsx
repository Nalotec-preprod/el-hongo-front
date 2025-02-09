import { cn } from "@/lib/utils"
import { ModalWindowProps } from "@/types/ui"
import { CircleX } from "lucide-react"

export default function ModalWindow({
  isVisible,
  closeFn,
  className,
  children,
}: ModalWindowProps) {
  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-10 flex h-[100%] items-center justify-center overflow-hidden backdrop-blur-md",
        className,
      )}
    >
      <div
        className="relative w-[500px] max-w-[95vw] space-y-4 overflow-hidden rounded-lg bg-white"
        style={{
          backgroundImage: "url('/images/plana-loteria/02.jpg')",
          backgroundOrigin: "center",
          backgroundSize: "cover",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-whiteModalOverlay p-8">{children}</div>

        <button
          type="button"
          onClick={() => closeFn(false)}
          className="absolute -top-2 right-3"
        >
          <CircleX size={26} />
        </button>
      </div>
    </div>
  )
}
