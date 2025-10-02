import Image from "next/image";
import Link from "next/link";
import SocialsPicture from "./socialsImage";

function Navbar(){
    return(
    <nav className="p-20">
        <ul className="flex items-center gap-10 justify-between w-full flex-col sm:flex-row">
            <li className="mx-auto sm:mx-0"> 
                <Link href="https://youtube.com/@CatsrielDreemurr"> 
                    <Image src="/catsrieldreemurr.png" alt="catsrieldreemurr" height={400} width={400}></Image>
                    <p className="text-center text-2xl font-bold mt-4">Your Local Silly</p>
                </Link> 
            </li>

            <li className="flex gap-10">
                <SocialsPicture imageURL="/youtube.png" destination="https://youtube.com/@CatsrielDreemurr"/>
                <SocialsPicture imageURL="/twitter.png" destination="https://x.com/purrfectiu"/>
                <SocialsPicture imageURL="/github.png" destination="https://github.com/catsrieldreemurr"></SocialsPicture>
                <div></div>
            </li>

        </ul>
    </nav>
    )
}

export default Navbar;