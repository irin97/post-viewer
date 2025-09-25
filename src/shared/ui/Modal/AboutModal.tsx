import { type FC, useEffect } from "react";
import styles from "./AboutModal.module.css";

interface AboutModalProps {
    onClose: () => void
    isOpen: boolean
}

export const AboutModal: FC<AboutModalProps> = ({ onClose, isOpen }) => {

    useEffect(() => {
        if (!isOpen) return

        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleEscKey)

        return () => document.removeEventListener('keydown', handleEscKey)

    }, [onClose, isOpen])



    return (
        <div className={`${styles.box} ${isOpen ? styles.modalOpen : ''}`} onClick={onClose}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <p className={styles.descr}>View your friends' posts with Post Viewer. Stay connected!</p>
                <button onClick={onClose} className={styles.button}>Close</button>
            </div>
        </div >
    )
}