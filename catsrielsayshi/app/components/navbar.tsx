import Image from "next/image";
import Link from "next/link";
import SocialsPicture from "./socialsImage";
import Typography from "./typography";
import NavbarLink from "./navLinks";
import SocialListcomponent from "./socialsListComponent";

function Navbar(){
    return(
    <nav className="p-20 text-white">
        <ul className="flex items-center justify-between w-full flex-col sm:flex-row">
            <li className="mx-auto sm:mx-0"> 
                <Link href="https://youtube.com/@CatsrielDreemurr"> 
                    <Image src="/catsrieldreemurr.png" alt="catsrieldreemurr" height={400} width={400}></Image>
                    <Typography variant="h2" sx="mt-4 text-center" isBold>Your Local Silly</Typography>
                </Link> 
            </li>

            <div className="bg-amber-500/50 p-4 rounded-xl mt-5 sm:mt-0 flex flex-row gap-5">
                <NavbarLink altText="Home" iconPath="/home.png" des="/"></NavbarLink>
                <NavbarLink altText="Home" iconPath="/twitter.png" des="/"></NavbarLink>
                <NavbarLink altText="Home" iconPath="/home.png" des="/"></NavbarLink>
                <NavbarLink altText="Home" iconPath="/home.png" des="/"></NavbarLink>

            </div>

            <div className="hidden sm:inline">
                <SocialListcomponent></SocialListcomponent>
            </div>

        </ul>
    </nav>
    )
}

export default Navbar;