import { useGetVideoList } from '@/hooks';

import {
  ActionButton,
  ChannelDescription,
  MetaData,
  UpNext,
} from '../../../common';

import styles from './video-info.module.css';

export const VideoInfo = () => {
  const { data: playlist } = useGetVideoList();

  return (
    <div className={styles.infoAndUpNext}>
      <section className={styles.info}>
        <MetaData />
        <ActionButton />
        <ChannelDescription />
      </section>
      <section className={styles.upNext}>
        <UpNext playlist={playlist} />
      </section>
    </div>
  );
};
