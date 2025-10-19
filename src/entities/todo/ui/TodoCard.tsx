import type { TodoType } from "@/entities/todo/model/types";
import { type FC } from "react";
import styles from './TodoCard.module.css';
import themeStyles from '@/shared/styles/theme.module.css';
import { useTheme } from "@/shared/lib/theme/useTheme";

interface TodoCardProps {
    todo: TodoType
}

export const TodoCard: FC<TodoCardProps> = ({ todo }) => {
    const { theme } = useTheme();

    return <div className={`${styles.card} ${themeStyles['card' + theme]}`}>
        <p className={  todo.completed ?  `${styles.description} ${themeStyles['text' + theme]} ${styles.completed}`: `${styles.description} ${themeStyles['text' + theme]}`}>{todo.title}</p>
        <input type="checkbox" checked={todo.completed} readOnly />
    </div>
}