import { MdAdd } from 'react-icons/md';
import styles from './LeftPane.module.css';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <span>Connections</span>
      <div className={styles.addButton}><MdAdd size="20px" /></div>
    </div>
  );
}

function LeftPane() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default LeftPane;
