import Main_header from "@/components/main_header";

export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <Main_header/>
        {children}
        </body>
        </html>
    )
}
