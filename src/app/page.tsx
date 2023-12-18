"use client";
import styles from "./page.module.css";
import backgroundImg from "./../assets/homeBackground.jpg";
import PDAExp from "./../assets/PDAExp.png";
import Image from "next/image";
import { useState } from "react";
import { BtnComponent } from "@/components/button/button";
import { InsertImgSection } from "@/components/imgUpload/InsertImg";
import { useUser } from "@/contexts/userContext";
import { TicketDesign } from "@/components/ticketDesign/TicketDesign";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const { ticketDesign } = useUser();
  return (
    <main className={styles.main}>
      <Image
        layout="fill"
        objectFit="cover"
        src={backgroundImg}
        className={styles.bgImg}
        alt="full stadium"
      />
      <Image src={PDAExp} alt="PDA logo" className={styles.logo} />
      <BtnComponent
        text="Iniciar"
        size="1"
        background="transparent"
        color="white"
        type="button"
        onClick={() => setStart(!start)}
      />
      {start && <InsertImgSection />}
      {ticketDesign && <TicketDesign />}
    </main>
  );
}
