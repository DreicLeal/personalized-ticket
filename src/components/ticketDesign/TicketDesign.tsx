import { useUser } from "@/contexts/userContext";
import Image from "next/image";

export const TicketDesign = () => {
  const { croppedImg } = useUser();
  return <Image src={croppedImg} alt="selected img area" width={250} height={250} />;
};
