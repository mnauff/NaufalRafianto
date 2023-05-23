import '@/styles/globals.css'
import { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import * as React from 'react'

const font = Prompt({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
    title: {
        default: 'MNR',
        template: '%s | MNR',
    },
    description: 'Home page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    )
}
