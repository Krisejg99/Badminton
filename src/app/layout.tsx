import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    title: "Badminton Teams",
    description: "Team randomizer for badminton",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased p-4 sm:p-8 m-auto",
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })
