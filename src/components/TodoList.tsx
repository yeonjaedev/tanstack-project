import {useTodosQuery} from "../hooks/useTodosQuery";

const TodoList = () => {
    const {data, isLoading, isFetching, isError, error} = useTodosQuery();
    if (isLoading) {
        return <h2>Loading</h2>;
    }
    if (isError) {
        return <h2>Error</h2>;
    }
    return (
        <>
            {data.data.map((todo: any) => (
                <div key={todo.id} style={{textAlign: "left"}}>
                    <li>
                        {todo.title}
                        {/* <input type="checkbox" checked={todo.isComplete} /> */}
                    </li>
                </div>
            ))}
        </>
    );
};
export default TodoList;
