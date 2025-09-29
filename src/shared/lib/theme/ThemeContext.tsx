import { createContext, type Dispatch, type SetStateAction } from "react";

export type Theme = 'Light' | 'Dark';

interface ThemeContextProps {
    theme: Theme,
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: 'Light', setTheme: () => { } });