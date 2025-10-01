import Image from "next/image";
import Link from "next/link";

function Navbar(){
    return(
    <nav className="bg-sky-800 p-3">
        <ul className="flex items-center gap-5">
            <li><Image src="/catsrieldreemurr.png" alt="catsrieldreemurr" height={200} width={200}></Image></li>
            <li> <Link href="/" className="hover:bg-sky-700 p-3 rounded-sm text-xl">Home</Link> </li>
            <li> <Link href="/" className="hover:bg-sky-700 p-3 rounded-sm text-xl">Not Home</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;