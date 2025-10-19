import { type FC } from "react";
import { type PhotoType } from "../model/types";
import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from './PhotoCard.module.css';
import themeStyles from '@/shared/styles/theme.module.css';

interface PhotoCardProps {
    photo: PhotoType
}

export const PhotoCard: FC<PhotoCardProps> = ({ photo }) => {
    const { theme } = useTheme();

    return <div className={`${styles.card} ${themeStyles['card' + theme]}`}>
        <img src={photo.thumbnailUrl} alt="img" />
        <h2 className={`${styles.title} ${themeStyles['text' + theme]}`}>{photo.title}</h2>
    </div>
}