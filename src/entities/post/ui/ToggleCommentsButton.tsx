import { type FC } from 'react';
import styles from "@/shared/ui/Button/Button.module.css";
import { useTheme } from '@/shared/lib/theme/useTheme';

interface ToggleCommentsButtonProps {
    commentsOpen: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ToggleCommentsButton: FC<ToggleCommentsButtonProps> = ({ commentsOpen, onClick }) => {

    const { theme } = useTheme();
    const btnClassName = theme === 'Dark' ? 'Light' : 'Dark'

    return <button className={`${styles.button} ${styles['button' + btnClassName]}`} onClick={onClick}>{commentsOpen ? 'Hide' : 'Show'} comments</button>

}