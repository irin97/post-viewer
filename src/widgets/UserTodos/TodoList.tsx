import { TodoCard } from "@/entities/todo/ui/TodoCard";
import type { TodoListType } from '@/entities/todo/model/types';
import styles from './TodoList.module.css';
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface TodoListProps {
    todoList: TodoListType;
}

export const TodoList = ({ todoList }: TodoListProps) => {

    return <ItemList
        items={todoList}
        renderItem={(item) => <TodoCard todo={item} />}
        listClassName={styles.list}
    />
}