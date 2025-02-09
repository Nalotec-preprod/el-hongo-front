import { ReactNode } from "react"

export type StylesT = {
  className?: string
}

export type NavbarLinkT = {
  name: string
  href: string
}

export type ModalWindowProps = {
  isVisible: boolean
  closeFn: (val: boolean) => void
  className?: string
  children?: ReactNode
}
