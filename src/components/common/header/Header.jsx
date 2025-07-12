import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className='fab fa-youtube'></i>
        <span className={styles.title}>Premium</span>
      </div>
      <div className={styles.icons}>
        <i className='fas fa-search'></i>
        <i className='fas fa-ellipsis-v'></i>
      </div>
    </header>
  );
};
