import styles from './video-player.module.css';

export const VideoPlayer = () => {
  return (
    <section className={styles.player}>
      <video
        controls
        className={styles.video}
        src='/video/demo-video.mp4'
      ></video>
    </section>
  );
};
