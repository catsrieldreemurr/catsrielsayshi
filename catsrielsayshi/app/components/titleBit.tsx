import Image from "next/image";
import React from "react";
import GetCurrentAge from "./ageCalculator";
import Typography from "./typography";

function Titlebit(){
    return(
        <div className="sm:flex">
            <Image src="/wavesatyou.png" alt="hi :D" height={400} width={400}></Image>
            <div className="bg-black/90 p-10 flex-col rounded-lg text-center self-center text-white sm:text-xl text-md m-5" >
                <Typography variant="h1" isBold hasSpacer>Howdy, I'm Fern!</Typography>
                <Typography>I'm your local <GetCurrentAge></GetCurrentAge> year old nerd from Norway.</Typography>
                <Typography>I do stuff online sometimes. Check it out maybe.</Typography>
            </div>
        </div>
    )
}

export default Titlebit;