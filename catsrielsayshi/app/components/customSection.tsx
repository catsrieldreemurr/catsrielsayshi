import { ReactNode } from "react";

interface Setprops{
    children?: ReactNode 
    whitebackground?: boolean
}

export default function CustomSection({children, whitebackground}:Setprops){
    if(!whitebackground){
        return (
            <div className={`flex flex-col justify-center items-center mt-10`}>
                {children}
            </div>
        );
    }
    else {
        return (
            <div className={`flex flex-col justify-center items-center mt-10 bg-white`}>
                {children}
            </div>
        );
    }
    
}