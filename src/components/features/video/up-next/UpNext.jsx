import { NextVideo } from '../../../common';

import styles from './up-next.module.css';

export const UpNext = () => {
  return (
    <section className={styles.upNext}>
      <span className={styles.title}>다음 영상 보기</span>
      <NextVideo />
    </section>
  );
};
