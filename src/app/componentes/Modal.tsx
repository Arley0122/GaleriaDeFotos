
import style from "@/app/style/style.module.css"
import { useState } from "react";

interface prop{
    fonte:string;
}


const Modal = ({fonte}:prop) => {
 

    return (
        <>
            <div className={style.modal} style={{backgroundColor: "black"}}>
                <img src={fonte} />
            </div>
        </>
    )
}

export default Modal;

