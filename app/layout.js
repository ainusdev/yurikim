import './globals.css'
import Path from "@/components/path";

export const metadata = {
    title: 'Yuri Kim Portfolio',
    description: '',
}

export default function RootLayout({children}) {

    return (
        <html>
        <body>
        {children}
        </body>
        </html>
    )
}
