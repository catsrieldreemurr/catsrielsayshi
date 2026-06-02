import Image from "next/image"
import Link from "next/link"

interface sp{
    des: string
    iconPath: string
    altText: string
}

export default function NavbarLink({des, iconPath, altText}:sp){
    return (
        <Link href={des}>
            <Image alt={altText} height={30} width={30} src={iconPath}></Image> 
        </Link>
    )
}