import { useUser } from "@/contexts/userContext";
import Image from "next/image";
import styles from "./index.module.scss";
import { ticketModels } from "@/assets/ticketModels";
import { useState } from "react";

export const TicketDesign = () => {
  const [choosedLayout, setChoosedLayout] = useState(0);
  const [username, setUsername] = useState("")
  const { croppedImg } = useUser();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.ticketContainer}>
        <Image src={ticketModels[choosedLayout]} alt="ticket Layout" className={styles.ticketSelected}/>
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
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <ul className={styles.selectTicketContainer}>
        {ticketModels.map((model, i) => (
          <li key={i} onClick={() => setChoosedLayout(i)}>
            <Image src={model} alt={`ticket model ${i}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};
