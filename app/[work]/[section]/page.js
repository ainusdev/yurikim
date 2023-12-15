import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";
import data from "@/data/data.json";
import React from "react";

export default function SectionPage({params}) {
    const work = params.work;
    const section = params.section;
    const currentPath = `/${work}/${section}`
    const sectionData = data[work][section];

    return (<main className={styles.container}>
        <div style={{
            display: "flex", flexDirection: "column", gap: "0.6em",
        }}>
            <div style={{}}>
                <img src={`${sectionData.meta.section_text}`} alt={"section_text"}
                     height={"16vmh"}
                />
            </div>
            <div className={styles.gridContainer}>
                {Object.keys(sectionData)
                    .filter(e => e !== "meta")
                    .map((e, i) => {
                        const item = sectionData[e];
                        const url = `${currentPath}/${e}`;
                        return <Link key={i} href={url}>
                            <div className={styles.gridItem}>
                                <Image src={`${item.meta.section_image}`} alt={"thumbnail"}
                                       layout="responsive"
                                       width={"100"}
                                       height={"100"}
                                />
                                <img src={`${item.meta.section_text}`}
                                     alt={"text"}
                                     height={"20vmh"}
                                />
                            </div>
                        </Link>
                    })}
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.7em",
                margin: "2em"
            }}>
                <Link href={"/"}><Image src={"/common/all-project.jpg"} alt={"all_project"} width={100} height={20} /></Link>
                <Link href={"mailto:yoorikimdesign@gmail.com"}><Image src={"/common/email.jpg"} alt={"email"} width={200} height={20} /></Link>
            </div>
        </div>

    </main>);
}
