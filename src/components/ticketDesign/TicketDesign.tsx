import { useUser } from "@/contexts/userContext";
import Image from "next/image";
import styles from "./index.module.scss";
import { ticketModels } from "@/assets/ticketModels";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";
export const TicketDesign = () => {
  const [choosedLayout, setChoosedLayout] = useState(0);
  const [username, setUsername] = useState("");

  const { croppedImg, setImgData, imgData } = useUser();
  const ticketContainerRef = useRef(null);
  const router = useRouter();

  const saveAsImage = async () => {
    if (ticketContainerRef.current) {
      const canvas = await html2canvas(ticketContainerRef.current);
      const imgComponent = canvas.toDataURL();
      setImgData(imgComponent);
      console.log(imgComponent)
    }
  };

  const lastStep = () => {
    saveAsImage();
    router.push("/allDone", { scroll: false });
  };
  return (
    <div className={styles.modalOverlay}>
      <div ref={ticketContainerRef} className={styles.ticketContainer}>
        <Image
          src={ticketModels[choosedLayout]}
          alt="ticket Layout"
          className={styles.ticketSelected}
        />
        <Image
          src={croppedImg}
          alt="selected img area"
          width={250}
          height={250}
          className={styles.ticketPhoto}
        />
        <p className={styles.username}>{username}</p>
      </div>
      <label htmlFor="username">Nome</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <ul className={styles.selectTicketContainer}>
        {ticketModels.map((model, i) => (
          <li key={i} onClick={() => setChoosedLayout(i)}>
            <Image src={model} alt={`ticket model ${i}`} />
          </li>
        ))}
      </ul>
      <button onClick={lastStep}>Finalizar</button>
    {/* {imgData && <Image src={imgData} alt="ticket completo" width={170} height={340}/>} */}
    </div>
  );
};
