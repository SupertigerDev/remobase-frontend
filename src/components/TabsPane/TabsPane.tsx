import { observer } from 'mobx-react-lite';
import { VscAdd } from 'react-icons/vsc';
import styles from './TabsPane.module.css';
import Tab from '../Tab/Tab';
import store from '../../store/store';
import Clickable from '../Clickable';

const Tabs = observer(() => {
  const { tabs } = store;
  const onNewTabClicked = () => {
    tabs.createHomeTab();
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        { tabs.tabsArray.map((tab) => <Tab key={tab.id} tab={tab} />)}
      </div>
      <Clickable
        className={styles.newTabButton}
        onClick={onNewTabClicked}
      >
        <VscAdd />
      </Clickable>
    </div>
  );
});

export default Tabs;
