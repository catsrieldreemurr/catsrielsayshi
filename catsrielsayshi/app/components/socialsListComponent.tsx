import SocialsPicture from "./socialsImage"

export default function SocialListcomponent(){
    return(
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
    )
}