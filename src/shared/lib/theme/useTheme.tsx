import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export function useTheme() {
    return useContext(ThemeContext)
}