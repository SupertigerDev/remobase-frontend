import { MdAdd } from 'react-icons/md';
import store from '../../store/store';
import Clickable from '../Clickable';
import styles from './LeftPane.module.css';

function Header() {
  const { tabs } = store;
  const onAddClicked = () => {
    tabs.createHomeTab();
  };
  return (
    <div className={styles.headerContainer}>
      <span>Connections</span>
      <Clickable onClick={onAddClicked} className={styles.addButton}><MdAdd size="20px" /></Clickable>
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
