import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazir",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ویداچین - آکادمی آموزش بلاک‌چین",
  description: "آموزش جامع بلاک‌چین، ارزهای دیجیتال و تکنولوژی‌های نوین در ویدا آکادمی",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className={`font-sans ${vazir.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
