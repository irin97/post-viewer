import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AboutModal } from "../Modal/AboutModal";
import styles from "./Button.module.css";
import { AboutModalContext } from "../Modal/ModalContext";

export function AboutModalButton() {
    const [isOpen, setModalOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLElement | null>(null);
    const handleModalClose = useCallback(() => setModalOpen(false), [])

    useEffect(() => {
        let container = document.getElementById('about-modal');
        if (!container) {
            container = document.createElement('div');
            container.id = 'about-modal';
            document.body.append(container);
        }
        containerRef.current = container;
    }, [])


    const handleModalOpen = () => setModalOpen(true);

    return (
        <>
            <AboutModalContext value={{ isOpen, handleModalClose, handleModalOpen }}>
                <button className={`${styles.button} ${styles.buttonLight}`} onClick={handleModalOpen}>About us</button>
                {containerRef.current && createPortal(<AboutModal />, containerRef.current)}
            </AboutModalContext>
        </>
    )
}