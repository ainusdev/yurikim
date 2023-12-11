import {promises as fs} from 'fs';
import styles from './page.module.css';
import Link from "next/link";
import Image from "next/image";

export default async function Promotional() {
    const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
    const data = JSON.parse(file);

    return (<main className={styles.container}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6em",
        }}>
            <div>
                <span style={{
                    fontSize: "1.5em",
                    marginRight: "0.4em",
                }}>{data.seoul.promotional.title1}</span>
                <span style={{
                    fontSize: "0.7em",
                    marginRight: "1em",
                }}>{data.seoul.promotional.title2}</span>
                <span style={{
                    fontSize: "0.7em"
                }}>{data.seoul.promotional.title3}</span>
            </div>
            <div className={styles.gridContainer}>
                {data.seoul.promotional.children.map((e, i) => {
                    return <Link key={i} href={e.url}>
                        <div className={styles.gridItem}>
                            <Image src={`/${e.thumbnail}`} alt={e.thumbnail}
                                   layout="responsive"
                                   width={"100"}
                                   height={"100"}
                            />
                            <span className={styles.label1}>{e.title_en}</span>
                            <span className={styles.label2}>{e.title_ko}</span>
                        </div>
                    </Link>
                })}
            </div>
        </div>

    </main>);
}
