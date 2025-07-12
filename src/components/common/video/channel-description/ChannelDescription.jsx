import Channel_Logo from '@/assets/channel-logo/Coding_Apple.jpeg';
import { useGetChannelInfo } from '@/hooks';

import styles from './channel-description.module.css';

export const ChannelDescription = () => {
  const { data: channelInfo } = useGetChannelInfo();

  return (
    <div className={styles.channel}>
      <div className={styles.metadata}>
        <img
          src={channelInfo?.items[0]?.snippet?.thumbnails?.default?.url}
          alt='channel-logo'
        />
        <div className={styles.info}>
          <span className={styles.name}>
            {channelInfo?.items[0]?.snippet?.title}
          </span>
          <span className={styles.subscribers}>
            {Number(
              channelInfo?.items[0]?.statistics?.subscriberCount,
            ).toLocaleString('ko-KR')}
            명
          </span>
        </div>
      </div>
      <button className={styles.subscribe}>구독</button>
    </div>
  );
};
