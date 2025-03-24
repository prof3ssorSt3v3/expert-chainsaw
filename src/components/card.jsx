import styles from './card.module.css';
import { useUser } from '../context/users.context';

export default function Card() {
  // const [_, _f, removeOne] = useUser();
  const { removeOne } = useUser();

  return <div className={styles.card}></div>;
}
