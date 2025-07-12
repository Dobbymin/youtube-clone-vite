import GPT_THUMBNAIL from '@/assets/thumbnail/gpt.jpeg';
import HTML_THUMBNAIL from '@/assets/thumbnail/html.jpeg';
import MODERN_THUMBNAIL from '@/assets/thumbnail/modern.jpeg';

import styles from './next-video.module.css';

export const NextVideo = () => {
  return (
    <ul className={styles.nextVideos}>
      <li className={styles.item}>
        <div className={styles.img}>
          <img src={HTML_THUMBNAIL} alt='html-thumbnail' />
        </div>
        <div className={styles.itemInfo}>
          <span className={styles.title}>
            html은 프로그래밍 언어 맞네요 역시
          </span>
          <span className={styles.name}>코딩애플</span>
          <span className={styles.views}>조회수 6.2만회 1개월 전</span>
        </div>
        <button className={styles.moreBtn}>
          <i className='fas fa-ellipsis-v'></i>
        </button>
      </li>
      <li className={styles.item}>
        <div className={styles.img}>
          <img src={MODERN_THUMBNAIL} alt='modern-thumbnail' />
        </div>
        <div className={styles.itemInfo}>
          <span className={styles.title}>
            2023 &lsquo;모던&rsquo; 웹개발자 하려면 배울 것들
          </span>
          <span className={styles.name}>코딩애플</span>
          <span className={styles.views}>조회수 10만회 9개월 전</span>
        </div>
        <button className={styles.moreBtn}>
          <i className='fas fa-ellipsis-v'></i>
        </button>
      </li>
      <li className={styles.item}>
        <div className={styles.img}>
          <img src={GPT_THUMBNAIL} alt='gpt-thumbnail' />
        </div>
        <div className={styles.itemInfo}>
          <span className={styles.title}>
            진짜로 개발자 대체품 나옴 (GPT4 코드 인터프리터)
          </span>
          <span className={styles.name}>코딩애플</span>
          <span className={styles.views}>조회수 8.4만회 2개월 전</span>
        </div>
        <button className={styles.moreBtn}>
          <i className='fas fa-ellipsis-v'></i>
        </button>
      </li>
    </ul>
  );
};
