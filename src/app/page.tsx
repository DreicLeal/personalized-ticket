"use client";
import styles from "./page.module.css";
import backgroundImg from "./../assets/homeBackground.jpg";
import Image from "next/image";
import { useState } from "react";
import { BtnComponent } from "@/components/button/button";
import { InsertImgSection } from "@/components/imgUpload/InsertImg";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  console.log(start);
  return (
    <main className={styles.main}>
      <Image
        layout="fill"
        objectFit="cover"
        src={backgroundImg}
        className={styles.bgImg}
        alt="full stadium"
      />
      <BtnComponent
        text="Iniciar"
        size="1"
        background="transparent"
        color="white"
        type="button"
        onClick={() => setStart(!start)}
      />
      {start && <InsertImgSection />}
    </main>
  );
}
