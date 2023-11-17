import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IproviderProps {
  children: ReactNode;
}

export interface UserProviderData {
  selectedImg: File | null;
  setSelectedImg: Dispatch<SetStateAction<File | null>>;
}
