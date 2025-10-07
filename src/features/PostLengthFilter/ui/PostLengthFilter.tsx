import { useState, useRef, type FC } from "react";
import styles from "./PostLengthFilter.module.css";
import { useTheme } from "@/shared/lib/theme/useTheme";

interface PostLengthFilterProps {
    setFilterLength: (value: number) => void;
    minValue: number;
    maxValue: number;
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ setFilterLength, minValue, maxValue }) => {
    const [titleLength, setTitleLength] = useState<number>(0);
    const debounceTimer = useRef<null | ReturnType<typeof setTimeout>>(null);
    const { theme } = useTheme();


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setTitleLength(newValue);

        if (debounceTimer.current) clearTimeout(debounceTimer.current)

        debounceTimer.current = setTimeout(() => {
            setFilterLength(newValue);
        }, 500)

    }

    return (<>
        <div className={`${styles['text' + theme]}`}>filter by minimum title length</div>
        <div className={styles.wrapper}>
            <input type="range" min={minValue} max={maxValue} className={styles.input} value={titleLength} onChange={handleInput} />
            <span className={`${styles.inputValue} ${styles['text' + theme]}`}>{titleLength}</span>
        </div>
    </>
    )
}