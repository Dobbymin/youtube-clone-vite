import styles from './action-button.module.css';

export const ActionButton = () => {
  return (
    <ul className={styles.actions}>
      <li>
        <button className={styles.actionsButton}>
          <i className='active fas fa-thumbs-up' />
          <span>3천</span>
        </button>
      </li>
      <li>
        <button className={styles.actionsButton}>
          <i className='fas fa-thumbs-down' />
          <span>1</span>
        </button>
      </li>
      <li>
        <button className={styles.actionsButton}>
          <i className='fas fa-share' />
          <span>공유</span>
        </button>
      </li>
      <li>
        <button className={styles.actionsButton}>
          <i className='fas fa-download' />
          <span>저장</span>
        </button>
      </li>
      <li>
        <button className={styles.actionsButton}>
          <i className='fa-solid fa-scissors' />
          <span>클립</span>
        </button>
      </li>
      <li>
        <button className={styles.actionsButton}>
          <i className='fa-solid fa-flag' />
          <span>리포트</span>
        </button>
      </li>
    </ul>
  );
};
