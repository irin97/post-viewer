import { useEffect, useContext } from "react";
import styles from "./AboutModal.module.css";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import { AboutModalContext } from "./ModalContext";

export const AboutModal = () => {

    const { isOpen, handleModalClose } = useContext(AboutModalContext);

    useEffect(() => {
        if (!isOpen) return

        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleModalClose();
            }
        }

        document.addEventListener('keydown', handleEscKey)

        return () => document.removeEventListener('keydown', handleEscKey)

    }, [isOpen, handleModalClose])


    return (
        <div className={`${styles.box} ${isOpen ? styles.modalOpen : ''}`} onClick={handleModalClose}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <ModalHeader header='About us' />
                <ModalBody text='View your friends posts with Post Viewer. Stay connected!'></ModalBody>
                <ModalFooter />
            </div>
        </div >
    )
}