import { useQuery } from '@tanstack/react-query';

import { getVideoInfoAPI } from '@/apis';

export const useGetVideoInfo = () => {
  return useQuery({
    queryKey: ['videoInfo'],
    queryFn: () => getVideoInfoAPI(),
  });
};
