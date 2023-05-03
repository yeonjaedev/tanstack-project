import {useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {addTodo, getTodos, updateTodo} from "../apis/todos";
// import {queryClient} from "../main";

export const useTodosQuery = () => {
    return useQuery(["todos"], getTodos, {
        staleTime: 3000, // 3초 후 stale 상태가 됨
    });
};

export const useAddTodoQuery = (success: any) => {
    const queryClient = useQueryClient();
    return useMutation(addTodo, {
        onSuccess: () => {
            success();
            queryClient.invalidateQueries({queryKey: ["todos"]});
        },
    });
};

export const useUpdateTodoQuery = () => {
    const queryClient = useQueryClient();
    return useMutation(updateTodo, {
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries({queryKey: ["todos"]});
        },
    });
};
