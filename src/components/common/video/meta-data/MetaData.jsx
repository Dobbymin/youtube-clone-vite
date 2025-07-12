import styles from './meta-data.module.css';

export const MetaData = () => {
  return (
    <div className={styles.metadata}>
      <ul className={styles.hashtags}>
        <li>#코딩애플</li>
        <li>#GDSC</li>
        <li>#CSS_Study</li>
      </ul>
      <div className={styles.titleAndButton}>
        <span className={styles.title}>
          올해부턴 CSS 다르게 짬 ㅅㄱ (2022년 CSS 채신기술)
        </span>
        <button className={styles.moreBtn}>
          <i className='fas fa-caret-down'></i>
        </button>
      </div>
      <span className={styles.views}>조회수 114,839회 2021. 11. 27.</span>
    </div>
  );
};
