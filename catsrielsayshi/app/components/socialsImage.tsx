import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialsPictureProps = {
    imageURL: string;
    destination: string;
}

function SocialsPicture({imageURL, destination}: SocialsPictureProps){
    return(
        <Link href={destination}><Image src={imageURL} height={70} width={70} alt={destination}></Image> </Link>
    )
}

export default SocialsPicture;