import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />

        </main>
    )
}
