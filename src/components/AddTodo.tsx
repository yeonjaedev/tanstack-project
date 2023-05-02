import {useEffect, useState} from "react";
import {useAddTodoQuery} from "../hooks/useTodosQuery";
import {useQueryClient} from "@tanstack/react-query";

const AddTodo = () => {
    const [title, setTitle] = useState<string>("");
    const onSuccess = () => {
        console.log("???????");
        const queryClient = useQueryClient();
        console.log("!!!!!");
        queryClient.invalidateQueries({queryKey: ["todos"]});
        setTitle("");
    };
    const {mutate: add, isSuccess} = useAddTodoQuery({onSuccess});

    const addTodo = () => {
        let randomId = Math.random().toString(36).substring(2, 12);
        add({id: randomId, title: title, isComplete: false});
        setTitle("");
    };
    return (
        <>
            <input onChange={e => setTitle(e.target.value)} />
            <button onClick={addTodo}>추가하기</button>
        </>
    );
};
export default AddTodo;
