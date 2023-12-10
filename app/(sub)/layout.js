import Main_header from "@/components/main_header";
import Link from "next/link";
import Image from "next/image";
import ProfileIcon from "@/components/profile_icon";
import Menu from "@/components/menu";
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
