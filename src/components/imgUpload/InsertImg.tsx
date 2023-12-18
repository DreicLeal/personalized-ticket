"use client";

import styles from "./index.module.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useUser } from "@/contexts/userContext";
import { ImgCropModal } from "../imgCropModal/ImgCropModal";

export const InsertImgSection: React.FC = () => {
  const { setSelectedImg, setCrop, selectedImg } = useUser();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setSelectedImg(reader.result?.toString() || "")
      );
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <>
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
      {selectedImg && <ImgCropModal />}
    </>
  );
};
