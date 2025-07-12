import Channel_Logo from '@/assets/channel-logo/Coding_Apple.jpeg';

import styles from './channel-description.module.css';

export const ChannelDescription = () => {
  return (
    <div className={styles.channel}>
      <div className={styles.metadata}>
        <img src={Channel_Logo} alt='channel-logo' />
        <div className={styles.info}>
          <span className={styles.name}>코딩애플</span>
          <span className={styles.subscribers}>구독자 19.7만명</span>
        </div>
      </div>
      <button className={styles.subscribe}>구독</button>
    </div>
  );
};
