import { ReactNode } from "react";

interface SetProps{
    children?: ReactNode

    isBold?: boolean
    hasSpacer?: boolean

    variant?: "h1" | "h2" | "h3" | undefined,

    sx?: string
}

export default function Typography({children, isBold, hasSpacer, variant, sx}:SetProps){
    if(variant !== undefined && variant === "h1"){
        return <h1 className={`text-2xl sm:text-4xl ${isBold && 'font-bold'} ${hasSpacer && 'p-4'} ${sx}`}>{children}</h1>
    }
    else if (variant !== undefined && variant === "h2"){
        return <h2 className={`text-xl sm:text-3xl ${isBold && 'font-bold'} ${hasSpacer && 'p-4'} ${sx}`}>{children}</h2>
    }
    else if (variant !== undefined && variant === "h3"){
        return <h3 className={`text-lg sm:text-2xl ${isBold && 'font-bold'} ${hasSpacer && 'p-4'} ${sx}`}>{children}</h3>
    }

    else {
        return <p className={`text-md sm:text-xl ${isBold && 'font-bold'} ${hasSpacer && 'p-4'} ${sx}`}>{children}</p>
    }
}