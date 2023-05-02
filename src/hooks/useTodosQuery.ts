import {useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {addTodo, getTodos} from "../apis/todos";
// import {queryClient} from "../main";

export const useTodosQuery = () => {
    return useQuery(["todos"], getTodos, {
        staleTime: 3000, // 3초 후 stale 상태가 됨
    });
};

export const useAddTodoQuery = ({onSuccess}: any) => {
    const queryClient = useQueryClient();
    return useMutation(addTodo, {
        onSuccess,
        // onSuccess: () => {
        //     queryClient.invalidateQueries({queryKey: ["todos"]});
        //     onSuccess
        // },
    });
};
