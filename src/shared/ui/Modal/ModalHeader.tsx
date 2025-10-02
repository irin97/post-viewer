import { type FC } from "react";
import styles from "./AboutModal.module.css";

interface ModalHeaderProps {
    header: string
}

export const ModalHeader: FC<ModalHeaderProps> = ({ header }) => {

    return <h2 className={styles.header}>{header}</h2>
}