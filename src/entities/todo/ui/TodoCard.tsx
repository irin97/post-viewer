import type { TodoType } from "@/widgets/UserTodos/Todo";
import { type FC } from "react";
import styles from './TodoCard.module.css'
import { useTheme } from "@/shared/lib/theme/useTheme";

interface TodoCardProps {
    todo: TodoType
}

export const TodoCard: FC<TodoCardProps> = ({ todo }) => {
    const { theme } = useTheme();

    return <div className={`${styles.card} ${styles['card' + theme]}`}>
        <p className={  todo.completed ?  `${styles.description} ${styles['text' + theme]} ${styles.completed}`: `${styles.description} ${styles['text' + theme]}`}>{todo.title}</p>
        <input type="checkbox" checked={todo.completed} readOnly />
    </div>
}