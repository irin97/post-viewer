import { withLoading } from "@/shared/lib/hoc/withLoading";
import { TodoList } from "@/widgets/UserTodos/TodoList";
import { useGetUsersTodosListQuery } from "@/entities/todo/api/todosApi"; 
import { useParams } from "react-router-dom";

const TodoListWithLoading = withLoading(TodoList)

export const UserTodosPage = () => {
    const { id = '' } = useParams<{ id: string }>();
    const { data: todo, isLoading } = useGetUsersTodosListQuery(id)

    return <TodoListWithLoading isLoad={!isLoading} todoList={todo || []} />
}
