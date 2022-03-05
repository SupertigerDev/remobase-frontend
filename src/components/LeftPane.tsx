import { observer } from 'mobx-react-lite';
import styles from './LeftPane.module.css';
import store from '../store/store';

const LeftPane = observer(() => {
  const { selectedTab, selectedTabId } = store.tabs;
  return (
    <div className={styles.container}>
      <selectedTab.DrawerComponent />
      {selectedTabId}
    </div>
  );
});

export default LeftPane;
