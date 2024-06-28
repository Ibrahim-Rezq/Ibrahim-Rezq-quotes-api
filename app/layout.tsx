import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNavigation from '@/components/main-navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Quote Manager',
    description: 'Quote Manager App Created with next.js',
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' data-theme='sunset'>
            <body className={inter.className}>
                <MainNavigation />
                <main className={`min-w-full min-h-page flex bg-[#19191900]`}>
                    {children}
                </main>
            </body>
        </html>
    )
}
