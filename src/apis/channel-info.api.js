import axios from 'axios';

import { CHANNEL_ID } from '@/constants';

export const getChannelInfoAPI = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&maxResults=50&key=${
      import.meta.env.VITE_YOUTUBE_API_KEY
    }`,
  );
  return response.data;
};
