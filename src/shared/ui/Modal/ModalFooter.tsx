import styles from "./AboutModal.module.css";
import { useContext } from "react";
import { AboutModalContext } from "./ModalContext";

export function ModalFooter() {
    const { handleModalClose } = useContext(AboutModalContext);

    return <button onClick={handleModalClose} className={styles.button}>Close</button>
}