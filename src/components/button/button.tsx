import { ButtonHTMLAttributes } from "react";
import eye_open from "/public/eye_open.svg";
import eye_close from "/public/eye_close.svg";

import styles from "./button.module.scss";
import Image from "next/image";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btntext: string;
  toggle: boolean;
}

export default function Button({ btntext, toggle, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button}`} {...props}>
      <span>{btntext}</span>
      {toggle ? (
        <Image src={eye_close} alt="Hide Layer" />
      ) : (
        <Image src={eye_open} alt="Show Layer" />
      )}
    </button>
  );
}
