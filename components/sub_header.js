import styles from './sub_header.module.css'

import Link from "next/link";
import ProfileIcon from "@/components/profile_icon";
import Menu from "@/components/menu";
import Image from "next/image";

export default function SubHeader({children}) {
    return (
        <header className={styles.headerContainer}>
            <Link href={"/"}><Image src={"/Logo.png"} alt={"logo"} width={336 / 4} height={145 / 4}/></Link>
            <div>
                <ProfileIcon label="+"/>
                <Menu />
            </div>

        </header>
    )
}
