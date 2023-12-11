import {promises as fs} from 'fs';
import Image from "next/image";
import styles from './main_gallery.module.css';
import Link from "next/link";

export default async function MainGallery() {
    const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
    const data = JSON.parse(file);
    // const currentPath = usePathname();
    let pathArray = Array()
    return (
        <main className={styles.mainContainer}>
            {
                Object.keys(data)
                    .filter(e => e !== "meta")
                    .map((e, i) => {
                        pathArray.push(e);
                        const _data1 = data[e];

                        return <div key={i} className={styles.mainGalleryContainer}>
                            <span className={styles.mainGalleryHeader}>{_data1.meta.title_en}</span>
                            <div className={styles.mainGalleryBodyContainer}>
                                {
                                    Object.keys(_data1)
                                        .filter(e => e !== "meta")
                                        .map((e, j) => {
                                            const url = `/${pathArray[i]}/${e}`
                                            const _data2 = _data1[e];

                                            return <Link key={i} href={url}>
                                            <Image src={`/${_data2.meta.image}`} alt={_data2.meta.title} width={544 / 2.9}
                                                   height={432 / 2.9}/>
                                            <span className={styles.mainGalleryBodyTitle}>{_data2.meta.title_en}</span>
                                            <span className={styles.mainGalleryBodySubtitle}>{_data2.meta.subtitle_en}</span>
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
