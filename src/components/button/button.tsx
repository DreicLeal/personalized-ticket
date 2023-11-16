import { IBtnProps } from "@/interface";
import styles from "./index.module.scss";


export const BtnComponent: React.FC<IBtnProps> = ({
  text,
  size,
  background,
  type,
  color,
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${styles["size" + size]} ${
        styles[background]
      } ${styles[color!]}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
