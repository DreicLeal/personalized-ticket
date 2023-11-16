export interface IBtnProps {
    text: string;
    size: "1" | "2" | "3";
    hover?: string;
    background: string;
    color?: string | undefined;
    type: "button" | "submit" | undefined;
    onClick: () => void;
  }