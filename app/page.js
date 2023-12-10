import styles from './page.module.css'
import MainGallery from "@/components/main_gallery";

export default function Home() {
    return (
        <main className={styles.main}>
            <MainGallery/>
        </main>
    )
}
