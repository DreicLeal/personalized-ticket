import { Dispatch, ReactNode, SetStateAction } from "react";
import { Crop } from "react-image-crop";
export interface IproviderProps {
  children: ReactNode;
}

export interface UserProviderData {
  selectedImg: string;
  setSelectedImg: Dispatch<SetStateAction<string>>;
  crop: Crop | undefined;
  setCrop: Dispatch<SetStateAction<Crop | undefined>>;
  aspect: number | undefined;
  onImgLoad: (img: React.SyntheticEvent<HTMLImageElement>) => void;
}
