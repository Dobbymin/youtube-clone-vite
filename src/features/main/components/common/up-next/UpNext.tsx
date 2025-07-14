/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetVideoList } from '../../../hooks';

import styles from './up-next.module.css';

export const UpNext = () => {
  const { data: playlist } = useGetVideoList();

  return (
    <>
      <span className={styles.title}>다음 영상 보기</span>
      <ul className={styles.nextVideos}>
        {playlist?.items?.map((video: any) => (
          <li className={styles.item} key={video.id}>
            <div className={styles.img}>
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
            </div>
            <div className={styles.itemInfo}>
              <span className={styles.title}>{video.snippet.title}</span>
              <span className={styles.name}>{video.snippet.channelTitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
