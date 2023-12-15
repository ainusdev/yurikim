import styles from './sub_header.module.css'

import Link from "next/link";
import ProfileIcon from "@/components/profile_icon";
import Menu from "@/components/menu";
import Image from "next/image";

export default function MainHeader({children}) {
    return (
        <header style={{
            paddingTop: "1.5em",
            paddingBottom: "2.9em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>

            <Link href={"/"}><Image src={"/main_logo.jpg"} alt={"logo"} width={336 / 2.3} height={145 / 2.3}/></Link>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <ProfileIcon label="+"/>
            </div>

        </header>
    )
}
