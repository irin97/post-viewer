import { useState, type ReactNode, useEffect, type PropsWithChildren } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';
import styles from '@/app/App.module.css';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: PropsWithChildren<ThemeProviderProps>) => {
    const [theme, setTheme] = useState<Theme>('Light');

    useEffect(() => {
        document.body.className = "";
        document.body.classList.add(styles['page' + theme]);
    }, [theme])

    return <ThemeContext value={{ theme, setTheme }}>
        {children}
    </ThemeContext>
}