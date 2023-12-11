import styles from './sub_header.module.css'

import Link from "next/link";
import ProfileIcon from "@/components/profile_icon";
import Menu from "@/components/menu";
import Image from "next/image";

export default function SubHeader({children}) {
    return (
        <header style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2em",
            paddingBottom: "4em"
        }}>

            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "770px",
            }}>
                <Link href={"/"}><Image src={"/Logo.png"} alt={"logo"} width={336 / 3} height={145 / 3}/></Link>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Menu />
                    <ProfileIcon label="+"/>
                </div>
            </div>

        </header>
    )
}
