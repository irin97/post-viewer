import { type FC } from "react";
import styles from "./AboutModal.module.css";

interface ModalBodyProps {
    text: string
}

export const ModalBody: FC<ModalBodyProps> = ({ text }) => {
    return <p className={styles.descr}>{text}</p>
}