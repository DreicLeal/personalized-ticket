"use client";
import { useUser } from "@/contexts/userContext";
import Image from "next/image";
import styles from "./index.module.scss";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
export default function AllDone() {
  const [width, setWidth] = useState(0)
  const { imgData } = useUser();

  useEffect(() => {
if(typeof window !== "undefined"){
  setWidth(innerWidth)
}
  },[])

  const downloadImg = () => {
    if (imgData) {
      saveAs(imgData, "fullImg");
    }
  };
  return (
    <div className={styles.container}>
      <h1>O PODER DA AÇÃO</h1>
      <h2>IMPORTANTE</h2>
      <h3>O seu ingresso foi gerado com sucesso</h3>
      <p>
        Agora é só efetuar o download do seu ingresso e fazer uma publicação no
        story do seu instagram marcando{" "}
        <span className={styles.pdaprofile}>@pdaexperience</span> no campo
        destinado
      </p>
      {imgData && (
        <Image
          src={imgData}
          className={styles.ticketToShare}
          alt="ticket done"
          width={170}
          height={340}
        />
      )}
      {width < 450 ? (
        <p>Pressione o ingresso e salve em sua galeria</p>
      ) : (
        <button onClick={downloadImg}>download</button>
      )}
    </div>
  );
}
