import {useEffect, useState} from "react";
import {useAddTodoQuery} from "../hooks/useTodosQuery";

const AddTodo = () => {
    const [title, setTitle] = useState<string>("");
    const onSuccess = (): void => {
        setTitle("");
    };
    const {mutate: add} = useAddTodoQuery(onSuccess);

    const addTodo = () => {
        let randomId = Math.random().toString(36).substring(2, 12);
        add({id: randomId, title: title, isComplete: false});
    };
    return (
        <>
            <input onChange={e => setTitle(e.target.value)} value={title} />
            <button onClick={addTodo}>추가하기</button>
        </>
    );
};
export default AddTodo;
