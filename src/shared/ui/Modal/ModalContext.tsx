import { createContext } from 'react';

interface aboutModalContextProps {
    isOpen: boolean,
    handleModalClose: () => void,
    handleModalOpen: React.MouseEventHandler<HTMLButtonElement>
}

export const AboutModalContext = createContext<aboutModalContextProps>({
    isOpen: false,
    handleModalClose: () => { },
    handleModalOpen: () => { },
})