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
                        const work = data[e];

                        return <div key={i} className={styles.mainGalleryContainer}>
                            <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                height: 10,
                            }}>
                                <Image
                                    className={styles.mainGalleryHeader}
                                    src={`/${work.meta.main_text}`}
                                    alt={work.meta.main_text}
                                    width={100}
                                    height={10}
                                />
                            </div>

                            <div className={styles.mainGalleryBodyContainer}>
                                {
                                    Object.keys(work)
                                        .filter(e => e !== "meta")
                                        .map((e, j) => {
                                            const url = `/${pathArray[i]}/${e}`
                                            const section = work[e];

                                            return <Link key={i} href={url}>
                                                <div className={styles.mainGalleryBodyInnerContainer}>
                                                    <Image src={`/${section.meta.main_image}`} alt={section.meta.main_image}
                                                           width={544 / 2.9}
                                                           height={432 / 2.9}/>

                                                    <Image src={`/${section.meta.main_text}`} alt={section.meta.main_text} height={35} width={544 / 2.9} />
                                                </div>
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
