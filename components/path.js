'use client'

import {usePathname} from "next/navigation";

export default function Path() {
    const currentPath = usePathname()
    console.log(currentPath.split("/").filter(e => e.trim().length > 0))
    return <p>현재 경로: {currentPath}</p>
}
