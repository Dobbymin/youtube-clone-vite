import YouTube from 'react-youtube';

import styles from './video-player.module.css';

export const VideoPlayer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.player}>
        <YouTube
          videoId='xmyixOBYYvY'
          opts={{
            width: '100%',
            height: '100%',
          }}
          className={styles.youtubePlayer}
        />
      </div>
    </section>
  );
};
