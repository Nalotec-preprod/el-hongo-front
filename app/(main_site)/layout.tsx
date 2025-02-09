import type { Metadata } from "next"
import "../globals.css"
import { poppins } from "@/components/ui/fonts"
import SocialBar from "@/components/main_site/footer/footer"
import Header from "@/components/main_site/header/header"

export const metadata: Metadata = {
  title: "El Hongo",
  description: "Restaurante y centro cultural en Playa del Carmen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <div className="relative">
          <SocialBar />
        </div>
        <main className="">{children}</main>
      </body>
    </html>
  )
}
