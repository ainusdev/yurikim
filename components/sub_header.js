import styles from './sub_header.module.css'

import Link from "next/link";
import ProfileIcon from "@/components/profile_icon";
import Menu from "@/components/menu";
import Image from "next/image";

export default function SubHeader({children}) {
    return (
        <header style={{
            paddingTop: "1.6em",
            paddingBottom: "3.5em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>

            <Link href={"/"}><Image src={"/main_logo.jpg"} alt={"logo"} width={336 / 3} height={145 / 3}/></Link>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Menu/>
                <ProfileIcon label="+"/>
            </div>

        </header>
    )
}
