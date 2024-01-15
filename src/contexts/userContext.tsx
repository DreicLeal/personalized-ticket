"use client";

import {
  IproviderProps,
  UserProviderData,
} from "@/interface/contextsInterface";
import { createContext, useCallback, useContext, useState } from "react";
import { Crop, centerCrop, makeAspectCrop } from "react-image-crop";

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: IproviderProps) => {
  const [selectedImg, setSelectedImg] = useState<string | undefined>();
  const [croppedImg, setCroppedImg] = useState<string>("");
  const [crop, setCrop] = useState<Crop>();
  const [aspect, setAspect] = useState<number | undefined>(1);
  const [ticketDesign, setTicketDesign] = useState<boolean>(false)
  const [imgData, setImgData] = useState<string | null>(null);
  const centerAspectCrop = (
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) => {
    return centerCrop(
      makeAspectCrop({ unit: "%", width: 40 }, aspect, mediaWidth, mediaHeight),
      mediaWidth,
      mediaHeight
    );
  };

  const onImgLoad = useCallback(
    (img: React.SyntheticEvent<HTMLImageElement>) => {
      if (aspect) {
        const { width, height } = img.currentTarget;
        setCrop(centerAspectCrop(width, height, aspect));
      }
    },
    []
  );

  return (
    <UserContext.Provider
      value={{
        imgData,
        setImgData,
        ticketDesign,
        setTicketDesign,
        croppedImg,
        setCroppedImg,
        aspect,
        selectedImg,
        setSelectedImg,
        setCrop,
        crop,
        onImgLoad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
