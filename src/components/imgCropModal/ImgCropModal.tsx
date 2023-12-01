import { useUser } from "@/contexts/userContext";
import { useRef, useState } from "react";
import ReactCrop, { PercentCrop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDebounceEffect } from "./debounceEffect";
import { canvasPreview } from "./canvasPreview";

export const ImgCropModal = () => {
  const { crop, setCrop, aspect, selectedImg, onImgLoad } = useUser();

  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop]
  );
  return (
    <div>
      <ReactCrop
        crop={crop}
        onChange={(_, percentCrop: PercentCrop) => setCrop(percentCrop)}
        onComplete={(c) => setCompletedCrop(c)}
        aspect={aspect}
      >
        <img src={selectedImg} alt="Crop" ref={imgRef} onLoad={onImgLoad} />
      </ReactCrop>
      <canvas ref={previewCanvasRef} />
    </div>
  );
};
