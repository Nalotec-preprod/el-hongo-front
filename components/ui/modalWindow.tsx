import { cn } from "@/lib/utils"
import { ModalWindowProps } from "@/types/ui"

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
      {children}

      <button type="button" onClick={() => closeFn(false)} className="hidden">
        X
      </button>
    </div>
  )
}
