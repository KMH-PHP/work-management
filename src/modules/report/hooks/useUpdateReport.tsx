import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "../../../lib/axios/axiosInstance";

export const useUpdateReport = (id: number | undefined) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => {
      await axios.post(`/reports-update/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reports"] as InvalidateQueryFilters);
    },
  });
};
