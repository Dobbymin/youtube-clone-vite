import axios from 'axios';

export const getVideoInfoAPI = async () => {
  const videoId = 'xmyixOBYYvY';
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${
      import.meta.env.VITE_YOUTUBE_API_KEY
    }`,
  );
  return response.data;
};
