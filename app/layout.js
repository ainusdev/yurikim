import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Yuri Kim Portfolio',
    description: '',
}

export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <Header/>
        {children}
        </body>
        </html>
    )
}
