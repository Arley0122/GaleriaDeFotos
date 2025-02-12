"use client"
import React from "react";
import ImgContainer from "./componentes/ImgContainer";
import Modal from "./componentes/Modal";
import style from "./style/style.module.css"

function Page(){

  return(<>
          <h1 className={style.title}>Fotos Intergalacticas</h1>
          <ImgContainer/>
  </>)
}

export default Page;



