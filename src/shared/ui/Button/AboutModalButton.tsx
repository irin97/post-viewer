import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { AboutModal } from "../Modal/AboutModal";
import styles from "./Button.module.css";

export function AboutModalButton() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        let container = document.getElementById('about-modal');
        if (!container) {
            container = document.createElement('div');
            container.id = 'about-modal';
            document.body.append(container);
        }
        containerRef.current = container;
    }, [])


    const hanldeModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <button className={styles.button} onClick={hanldeModalOpen}>About us</button>
            {containerRef.current && createPortal(<AboutModal onClose={handleModalClose} isOpen={modalOpen} />, containerRef.current)}
        </>
    )
}