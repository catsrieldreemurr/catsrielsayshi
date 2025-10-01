import Image from "next/image";
import Link from "next/link";

function Navbar(){
    return(
    <nav className="bg-sky-700 p-5">
        <ul className="flex items-center gap-5">
            <li> <Link href="https://youtube.com/@CatsrielDreemurr"> <Image src="/catsrieldreemurr.png" alt="catsrieldreemurr" height={200} width={200}></Image></Link></li>
            <li> <Link href="/" className="hover:bg-sky-800 p-5 rounded-sm text-2xl">Home</Link> </li>
            <li> <Link href="/" className="hover:bg-sky-800 p-5 rounded-sm text-2xl">Not Home</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;