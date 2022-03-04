import { observer } from 'mobx-react-lite';
import styles from './Tabs.module.css';
import Tab from './Tab';
import store from '../store/store';

const Tabs = observer(() => {
  const { tabs } = store;
  const onNewTabClicked = () => {
    tabs.createTab('test', {});
  };

  return (
    <div className={styles.container}>
      { tabs.tabsArray.map((tab) => <Tab key={tab.id} tab={tab} />)}
      <div
        role="button"
        tabIndex={0}
        className={styles.newTabButton}
        onClick={onNewTabClicked}
        onKeyDown={onNewTabClicked}
      >
        +
      </div>
    </div>
  );
});

export default Tabs;
