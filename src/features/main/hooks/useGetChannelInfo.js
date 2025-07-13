import { useQuery } from '@tanstack/react-query';

import { getChannelInfoAPI } from '../apis';

export const useGetChannelInfo = () => {
  return useQuery({
    queryKey: ['channelInfo'],
    queryFn: () => getChannelInfoAPI(),
  });
};
