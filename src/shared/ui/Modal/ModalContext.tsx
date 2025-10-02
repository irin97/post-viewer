import { createContext } from 'react';

interface aboutModalContextProps {
    isOpen: boolean,
    handleModalClose: () => void,
    handleModalOpen: () => void
}

export const AboutModalContext = createContext<aboutModalContextProps>({
    isOpen: false,
    handleModalClose: () => { },
    handleModalOpen: () => { },
})