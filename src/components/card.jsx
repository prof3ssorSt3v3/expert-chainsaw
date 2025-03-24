import styles from './card.module.css';
import { useUser } from '../context/users.context';
import { useTheme } from '../context/theme.context';

export default function Card({ name }) {
  // const [_, _f, removeOne] = useUser();
  const { removeOne } = useUser();
  const [theme] = useTheme();

  return (
    <div className={styles.card}>
      <h3 className={styles.name} style={{ color: theme.favorite }}>
        {name.name.first} {name.name.last}
      </h3>
      <p className={styles.username}>{name.login.username}</p>
      <p>
        <button className={styles.btn} onClick={() => removeOne(name.login.uuid)}>
          Delete
        </button>
      </p>
    </div>
  );
}
