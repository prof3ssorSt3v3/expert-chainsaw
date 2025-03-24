import styles from './header.module.css';
import { useUser } from '../context/users.context';

export default function Header({ children, eric }) {
  // const {_, addOne] = useUser();
  const { addOne } = useUser();

  return (
    <header className={styles.header} onClick={addOne}>
      <h1>Website Title</h1>
      {eric ? 'He is' : 'He is NOT.'}
      {children}
    </header>
  );
}
