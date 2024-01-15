import { Dispatch, ReactNode, SetStateAction } from "react";
import { Crop } from "react-image-crop";
export interface IproviderProps {
  children: ReactNode;
}

export interface UserProviderData {
  selectedImg: string | undefined;
  setSelectedImg: Dispatch<SetStateAction<string | undefined>>;
  crop: Crop | undefined;
  setCrop: Dispatch<SetStateAction<Crop | undefined>>;
  aspect: number | undefined;
  onImgLoad: (img: React.SyntheticEvent<HTMLImageElement>) => void;
  croppedImg: string;
  setCroppedImg: Dispatch<SetStateAction<string>>;
  ticketDesign: boolean;
  setTicketDesign: Dispatch<SetStateAction<boolean>>;
  setImgData: Dispatch<SetStateAction<string | null>>;
  imgData: string | null;
}
