import style from "@/app/style/style.module.css"

import Img from "./Img"
import { useState } from "react"
import Modal from "./Modal"

const ImgContainer = ()=>{

    let endereços:string[] = []

    for(let i = 1; i <= 9; i++){
        let end = `/imagens/${i}.jpg`;
        endereços.push(end);
    }

    const [modal, setModal] = useState<Boolean>(false);
    const [srcModal, setSrcModal] = useState<string>('');
    const [scrollPos, setScrollPos] = useState<number>(0)

    const handleClickImg = (endereço:string)=>{
        setSrcModal(endereço);
        setModal(true);
        document.body.className = 'modalOn';
        setScrollPos(window.scrollY)
        window.scrollTo(0,0);
    }

    return(<>

        <div className={style.containerImg}>
            {endereços.map((item,index) =>(
                <Img fonte={item} func={()=> handleClickImg(item)} id={index} key={index}/>
            ))}
        </div>
        {modal && 
        <>
            <Modal fonte={srcModal}/> 
            <div className={style.exit} onClick={()=>{setModal(false); document.body.className = 'modalOff'; window.scrollTo(0, scrollPos)}}>X</div>
        </>
            
        }
    </>)
    
}

export default ImgContainer;


