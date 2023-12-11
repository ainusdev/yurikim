import {promises as fs} from 'fs';
import Image from "next/image";
import styles from './main_gallery.module.css';
import Link from "next/link";

export default async function MainGallery() {
    const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <main className={styles.mainContainer}>
            {
                data.main.map((e,i)=> {
                    return <div key={i} className={styles.mainGalleryContainer}>
                        <span className={styles.mainGalleryHeader}>{e.title}</span>
                        <div className={styles.mainGalleryBodyContainer}>
                            {
                                e.children.map((e, i) => {
                                    return <Link key={i} href={e.url}>
                                        <Image src={`/${e.image}`} alt={e.title} width={544 / 2.9} height={432 / 2.9}/>
                                        <span className={styles.mainGalleryBodyTitle}>{e.title}</span>
                                        <span className={styles.mainGalleryBodySubtitle}>{e.subtitle}</span>
                                    </Link>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </main>
    );
}
