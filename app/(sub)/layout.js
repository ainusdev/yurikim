import SubHeader from "@/components/sub_header";

export const metadata = {
    title: 'Yuri Kim Portfolio',
    description: '',
}

export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <SubHeader/>
        {children}
        </body>
        </html>
    )
}
