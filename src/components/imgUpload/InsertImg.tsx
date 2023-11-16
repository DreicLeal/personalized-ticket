"use client";
import { useState } from "react";
import styles from "./index.module.scss"
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";


export const InsertImgSection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<File | null>(null);

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
        style={{display:"none"}}
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};
