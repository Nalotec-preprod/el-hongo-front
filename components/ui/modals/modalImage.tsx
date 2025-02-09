import ModalWindow from "./modalWindow"

interface ModalimageProps {
  imageUrl: string
  imageDescription?: string
  closeFn: (val: boolean) => void
  isVisible: boolean
}

export default function ModalImage({
  imageUrl,
  imageDescription,
  closeFn,
  isVisible,
}: ModalimageProps) {
  return (
    <ModalWindow isVisible={isVisible} closeFn={closeFn}>
      <div className="h-full w-full">
        <img src={imageUrl} alt={imageDescription ? imageDescription : ""} />
      </div>
    </ModalWindow>
  )
}
