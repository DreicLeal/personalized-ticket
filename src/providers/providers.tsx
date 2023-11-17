import { UserProvider } from "@/contexts/userContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};
