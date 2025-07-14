import {
  ActionButton,
  ChannelDescription,
  MetaData,
  UpNext,
} from '../../../common';

import styles from './video-info.module.css';

export const VideoInfo = () => {
  return (
    <div className={styles.infoAndUpNext}>
      <section className={styles.info}>
        <MetaData />
        <ActionButton />
        <ChannelDescription />
      </section>
      <section className={styles.upNext}>
        <UpNext />
      </section>
    </div>
  );
};
