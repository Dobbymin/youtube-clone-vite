import axios from 'axios';

import { CHANNEL_ID } from '@/constants';

export const getVideoListAPI = async () => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${
      import.meta.env.VITE_YOUTUBE_API_KEY
    }`,
  );
  return response.data;
};
