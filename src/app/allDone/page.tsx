"use client";
import { useUser } from "@/contexts/userContext";
import Image from "next/image";
import styles from "./index.module.scss"

export default function AllDone() {
  const { imgData } = useUser();
  return (
    <div className={styles.container}>
      <h1>O PODER DA AÇÃO</h1>
      <h2>IMPORTANTE</h2>
      <h3>O seu ingresso foi gerado com sucesso</h3>
      <p>Agora é só efetuar o download do seu ingresso e fazer uma publicação no story do seu instagram marcando <span className={styles.pdaprofile}>@pdaexperience</span> no campo destinado</p>
      {imgData && <Image src={imgData} className={styles.ticketToShare} alt="ticket done" width={170} height={340} />}
      <p>Pressione o ingresso e salve em sua galeria</p>
    </div>
  );
}
