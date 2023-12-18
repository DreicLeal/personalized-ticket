import { useUser } from "@/contexts/userContext";
import { useRef, useState } from "react";
import ReactCrop, { PercentCrop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDebounceEffect } from "./debounceEffect";
import { canvasPreview } from "./canvasPreview";
import styles from "./index.module.scss";
import Image from "next/image";

export const ImgCropModal = () => {
  const {
    crop,
    setCrop,
    aspect,
    selectedImg,
    onImgLoad,
    setCroppedImg,
    setSelectedImg,
    setTicketDesign,
  } = useUser();

  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const forwardToDesign = () => {
    setSelectedImg(undefined);
    setTicketDesign(true);
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
        const cropImgDataUrl = previewCanvasRef.current.toDataURL("image/url");
        setCroppedImg(cropImgDataUrl);
      }
    },
    100,
    [completedCrop]
  );
  return (
    <div className={styles.modalOverlay}>
      <div>
        <ReactCrop
          className={styles.modalContainer}
          crop={crop}
          onChange={(_, percentCrop: PercentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <Image
            width={500}
            height={500}
            src={selectedImg!}
            alt="Crop"
            ref={imgRef}
            onLoad={onImgLoad}
          />
        </ReactCrop>
        <canvas className={styles.preview} ref={previewCanvasRef} />
        <button onClick={() => forwardToDesign()}>Ok</button>
      </div>
    </div>
  );
};
