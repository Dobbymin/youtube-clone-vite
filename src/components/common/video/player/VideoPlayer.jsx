import video from '@/video/올해부턴 CSS 다르게 짬 ㅅㄱ (2022년 CSS 채신기술).mp4';

import styles from './video-player.module.css';

export const VideoPlayer = () => {
  return (
    <section className={styles.player}>
      <video controls className={styles.video} src={video}></video>
    </section>
  );
};
