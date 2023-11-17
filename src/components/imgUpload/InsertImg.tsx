"use client";

import styles from "./index.module.scss"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useUser } from "@/contexts/userContext";


export const InsertImgSection: React.FC = () => {
  const {selectedImg, setSelectedImg} = useUser()

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImg(event.target.files[0]);
    }
  };
  return (
    <div className={styles.uploadContainer}>
      <h2>Adicione uma imagem para o seu ingresso!</h2>
      <label htmlFor="upload-btn">
        <AddPhotoAlternateIcon />
      </label>
      <input
        id="upload-btn"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};
