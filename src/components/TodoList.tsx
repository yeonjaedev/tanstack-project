import {useTodosQuery, useUpdateTodoQuery} from "../hooks/useTodosQuery";

const TodoList = () => {
    const {data, isLoading, isFetching, isError, error} = useTodosQuery();

    const {mutate: update} = useUpdateTodoQuery();

    if (isLoading) {
        return <h2>Loading</h2>;
    }
    if (isError) {
        return <h2>Error</h2>;
    }
    const updateTodo = (checked: boolean, todo: any): void => {
        update({id: todo.id, title: todo.title, isComplete: !todo.isComplete});
    };
    return (
        <>
            {data.data.map((todo: any) => (
                <div key={todo.id} style={{textAlign: "left"}}>
                    <li>
                        {todo.title}
                        <input type="checkbox" checked={todo.isComplete} onChange={e => updateTodo(e.target.checked, todo)} />
                        {/* <input type="checkbox" checked={todo.isComplete} /> */}
                    </li>
                </div>
            ))}
        </>
    );
};
export default TodoList;
