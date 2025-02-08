"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { NavbarLinkT } from "@/types/ui"
import { useState } from "react"

export default function Navbar() {
  const navbarLinks: NavbarLinkT[] = [
    {
      name: "inicio",
      href: "/",
    },
    {
      name: "menú",
      href: "/menu",
    },
    {
      name: "nosotros",
      href: "/nosotros",
    },
    {
      name: "amigos",
      href: "/amigos",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "galeria",
      href: "/galeria",
    },
  ]

  const [showMenu, setShowMenu] = useState("hidden")

  const handleShowMenu = () => {
    if (showMenu === "hidden") {
      setShowMenu("block")
    } else {
      setShowMenu("hidden")
    }
  }

  return (
    <div className="flex h-full items-center">
      <button type="button" className="z-10 md:hidden" onClick={handleShowMenu}>
        <Menu size={36} className="font-medium text-gray-200" />
      </button>

      <ul
        className={`absolute -top-2 right-0 w-full origin-top animate-open-menu items-center justify-center gap-4 rounded-b-xl bg-menuBlackOverlay pb-6 pt-[60px] font-medium text-gray-200 backdrop-blur-md backdrop-filter md:relative md:top-auto md:flex md:animate-none md:bg-none md:p-0 md:backdrop-filter-none ${showMenu}`}
      >
        {navbarLinks.map((link: NavbarLinkT) => (
          <li
            key={link.name}
            className="w-full border-b border-b-gray-600 text-center uppercase md:border-none md:bg-none md:capitalize md:transition md:duration-300 md:hover:text-hongo-rustynail-700"
          >
            <Link
              href={link.href}
              className="block h-full w-full py-4 md:py-0"
              onClick={() => {
                setShowMenu("hidden")
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
