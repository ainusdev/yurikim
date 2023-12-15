import Image from "next/image";
import data from "@/data/data.json";
import Link from "next/link";

export default function SubPage({params}) {
    const work = params.work;
    const section = params.section;
    const sub = params.sub;
    const currentSection = `/${work}/${section}`;
    const currentPath = `${currentSection}/${sub}`;
    const subData = data[work][section][sub];
    const subAddressList = Object.keys(data[work][section]).filter(e => e !== "meta")

    const currentIndex = subAddressList.indexOf(sub)

    const isFirst = currentIndex === 0;
    const isLast = currentIndex === subAddressList.length - 1;

    const prevAddress = `${currentSection}/${isFirst ? subAddressList[subAddressList.length - 1] : subAddressList[currentIndex - 1]}`;
    const nextAddress = `${currentSection}/${isLast ? subAddressList[0] : subAddressList[currentIndex + 1]}`;

    return <>
        <Image src={`${subData.meta.top}`} alt={"top"} layout={"responsive"} width={10} height={10}/>
        <h1>{subData.meta.title_ko}</h1>
        {
            subData.meta.bottom.map((e,i) =>
                <Image key={i} src={`${e}`} alt={"bottom"} layout={"responsive"} width={10} height={10}/>
            )
        }
        <div style={{
            display: "flex",
            justifyContent: "center",
            margin: "2em",
            marginTop: "5em"
        }}>
            <Link href={prevAddress}><Image src={"/common/prev.jpg"} alt={"prev"} width={32} height={32}/></Link>
            <Link href={nextAddress}><Image src={"/common/next.jpg"} alt={"next"} width={32} height={32}/></Link>
        </div>
    </>
}
