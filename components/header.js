import styles from './header.module.css'

import Link from "next/link";
import ProfileIcon from "@/components/profile_icon";
import Menu from "@/components/menu";

export default function Header({children}) {
    return (
        <header className={styles.headerContainer}>
            <Link href={"/"}>Logo</Link>
            <ProfileIcon label="+" />
            <Menu/>
        </header>
    )
}
