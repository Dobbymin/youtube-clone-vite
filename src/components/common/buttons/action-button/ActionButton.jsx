import { ACTION_BUTTON_DATA } from '@/data';

import styles from './action-button.module.css';

export const ActionButton = () => {
  return (
    <ul className={styles.actions}>
      {ACTION_BUTTON_DATA.map((button) => (
        <li key={button.id}>
          <button className={styles.actionsButton}>
            <i className={button.icon} />
            <span>{button.text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
