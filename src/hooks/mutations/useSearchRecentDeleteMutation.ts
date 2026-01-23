import { deleteSearchRecent } from '@/api/search';
import { QUERY_KEY } from '@/constants/queryKey';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useSearchRecentDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSearchRecent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY.SEARCH_RECENT });
    },
  });
};

export default useSearchRecentDeleteMutation;
