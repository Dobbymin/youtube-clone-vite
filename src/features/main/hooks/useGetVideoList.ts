import { useQuery } from '@tanstack/react-query';

import { getVideoListAPI } from '../apis';

export const useGetVideoList = () => {
  return useQuery({
    queryKey: ['videoList'],
    queryFn: () => getVideoListAPI(),
  });
};
