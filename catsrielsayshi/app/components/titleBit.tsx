import Image from "next/image";
import React from "react";

function Titlebit(){
    return(
        <div className="sm:flex">
            <Image src="/wavesatyou.png" alt="hi :D" height={400} width={400}></Image>
            <div className="bg-black/90 p-10 flex-col rounded-lg text-center self-center text-white sm:text-xl text-md m-5" >
                <h1 className="text-2xl sm:text-4xl font-bold p-4">Howdy, I'm Fern!</h1>
                <p>I'm your local 17 year old nerd from Norway.</p>
                <p>I do stuff online sometimes. Check it out maybe.</p>
            </div>
        </div>
    )
}

export default Titlebit;