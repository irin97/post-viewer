import { useState, type FC, type ReactNode, useEffect } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';
import styles from '@/app/App.module.css';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('Light');

    useEffect(() => {
        document.body.className = "";
        document.body.classList.add(styles['page' + theme]);
    }, [theme])

    return <ThemeContext value={{ theme, setTheme }}>
        {children}
    </ThemeContext>
}