import Image from "next/image";
import Link from "next/link";
import SocialsPicture from "./socialsImage";
import Typography from "./typography";

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

            <li className="mt-5 sm:mt-0">
                <div className="grid grid-cols-3 gap-6">
                    <SocialsPicture imageURL="/youtube.png" destination="https://youtube.com/@CatsrielDreemurr"/>
                    <SocialsPicture imageURL="/twitter.png" destination="https://x.com/purrfectiu"/>
                    <SocialsPicture imageURL="/github.png" destination="https://github.com/catsrieldreemurr"></SocialsPicture>
                </div>
                
                <div className="col-span-3 flex justify-center gap-6 mt-5">
                    <SocialsPicture imageURL="/bsky.png" destination="https://bsky.app/profile/catsrieldreemurr.bsky.social"></SocialsPicture>
                    <SocialsPicture imageURL="/tiktok.png" destination="https://www.tiktok.com/@catsrieldreemurr"></SocialsPicture>
                </div>
            </li>

        </ul>
    </nav>
    )
}

export default Navbar;