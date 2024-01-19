"use client";
import styles from "./page.module.css";
import backgroundImg from "./../assets/mainBackground.jpg";
import PDAExp from "./../assets/PDAExp.png";
import Image from "next/image";
import { useState } from "react";
import { InsertImgSection } from "@/components/imgUpload/InsertImg";
import { useUser } from "@/contexts/userContext";
import { TicketDesign } from "@/components/ticketDesign/TicketDesign";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const { ticketDesign } = useUser();
  return (
    <main className={styles.main}>
      <Image
        src={backgroundImg}
        className={styles.bgImg}
        alt="full stadium"
      />
      <div className={styles.startContainer}>
      <Image src={PDAExp} alt="PDA logo" className={styles.logo} />
      <button
      className={styles.startBtn}
        color="white"
        type="button"
        onClick={() => setStart(!start)}
      >Iniciar</button>
      </div>
      {start && <InsertImgSection />}
      {ticketDesign && <TicketDesign />}
    </main>
  );
}
