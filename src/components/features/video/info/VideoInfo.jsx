import { ActionButton, ChannelDescription, MetaData } from '../../../common';
import { UpNext } from '../up-next';

import styles from './video-info.module.css';

export const VideoInfo = () => {
  return (
    <div className={styles.infoAndUpNext}>
      <section className={styles.info}>
        <MetaData />
        <ActionButton />
        <ChannelDescription />
      </section>

      <UpNext />
    </div>
  );
};
