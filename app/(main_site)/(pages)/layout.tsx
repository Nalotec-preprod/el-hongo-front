import type { Metadata } from "next"
import "../../globals.css"
import Header from "@/components/main_site/header/header"
import { poppins } from "@/components/ui/fonts"

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
        <main className="">{children}</main>
      </body>
    </html>
  )
}
