import { useGetVideoInfo } from '@/hooks';

import styles from './meta-data.module.css';

export const MetaData = () => {
  const { data: channelInfo } = useGetVideoInfo();

  const publishedAt = new Date(
    channelInfo?.items[0]?.snippet?.publishedAt,
  ).toLocaleDateString('ko-KR');

  return (
    <div className={styles.metadata}>
      <ul className={styles.hashtags}>
        <li>{`#${channelInfo?.items[0]?.snippet?.tags[0]}`}</li>
        <li>{`#${channelInfo?.items[0]?.snippet?.tags[1]}`}</li>
        <li>{`#${channelInfo?.items[0]?.snippet?.tags[2]}`}</li>
      </ul>
      <div className={styles.titleAndButton}>
        <span className={styles.title}>
          {channelInfo?.items[0]?.snippet?.title}
        </span>
        <button className={styles.moreBtn}>
          <i className='fas fa-caret-down' />
        </button>
      </div>
      <span className={styles.views}>
        조회수 1,424회
        {publishedAt}
      </span>
    </div>
  );
};
