import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";
import data from "@/data/data.json";

export default function SectionPage({params}) {
    const work = params.work;
    const section = params.section;
    const currentPath = `/${work}/${section}`
    const sectionData = data[work][section];

    return (<main className={styles.container}>
        <div style={{
            display: "flex", flexDirection: "column", gap: "0.6em",
        }}>
            <div>
                <span style={{
                    fontSize: "1.5em", marginRight: "0.4em",
                }}>{sectionData.meta.title_en}</span>
                <span style={{
                    fontSize: "0.7em", marginRight: "1em",
                }}>{sectionData.meta.subtitle_en}</span>
                <span style={{
                    fontSize: "0.7em"
                }}>{sectionData.meta.title_ko}</span>
            </div>
            <div className={styles.gridContainer}>
                {Object.keys(sectionData)
                    .filter(e => e !== "meta")
                    .map((e, i) => {
                        const item = sectionData[e];
                        const url = `${currentPath}/${e}`;
                        return <Link key={i} href={url}>
                            <div className={styles.gridItem}>
                                <Image src={`/${item.meta.thumbnail}`} alt={"thumbnail"}
                                       layout="responsive"
                                       width={"100"}
                                       height={"100"}
                                />
                                <span className={styles.label1}>{item.meta.title_en}</span>
                                <span className={styles.label2}>{item.meta.title_ko}</span>
                            </div>
                        </Link>
                    })}
            </div>
        </div>

    </main>);
}
