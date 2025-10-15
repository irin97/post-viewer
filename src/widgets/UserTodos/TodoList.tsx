import { TodoCard } from "@/entities/todo/ui/TodoCard";
import { type FC } from "react";
import type { TodoListType } from '@/widgets/UserTodos/Todo';
import styles from './TodoList.module.css'

interface TodoListProps {
    todoList: TodoListType;
}

export const TodoList: FC<TodoListProps> = ({ todoList }) => {
    const listTodos = todoList.map(item => (
        <li key={item.id}>
            <TodoCard todo={item} />
        </li>
    ))

    return <ul className={styles.list}>{listTodos}</ul>
}