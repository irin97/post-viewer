import { useState, useRef, type FC } from "react";
import styles from "./PostLengthFilter.module.css";

interface PostLengthFilterProps {
    setFilterLength: (value: number) => void
}

export const PostLengthFilter: FC<PostLengthFilterProps> = ({ setFilterLength }) => {
    const [titleLength, setTitleLength] = useState<number>(0);
    const debounceTimer = useRef<null | ReturnType<typeof setTimeout>>(null);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setTitleLength(newValue);

        if (debounceTimer.current) clearTimeout(debounceTimer.current)

        debounceTimer.current = setTimeout(() => {
            setFilterLength(newValue);
        }, 500)

    }

    return (<>
        <div>filter by minimum title length</div>
        <div className={styles.wrapper}>
            <input type="range" min='1' max='200' className={styles.input} value={titleLength} onChange={handleInput} />
            <span className={styles.inputValue}>{titleLength}</span>
        </div>
    </>
    )
}