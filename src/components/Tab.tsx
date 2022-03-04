import { observer } from 'mobx-react-lite';
import store from '../store/store';
import Tab from '../store/Tab.store';
import styles from './Tab.module.css';

interface Props {
  tab: Tab
}

const Tabs = observer(({ tab }: Props) => {
  const { tabs } = store;
  const isTabSelected = tabs.selectedTabId === tab.id;
  const onTabClicked = () => tabs.changeTab(tab.id);
  return (
    <div
      role="button"
      tabIndex={0}
      className={`${styles.container} ${isTabSelected && styles.selected}`}
      onClick={onTabClicked}
      onKeyDown={onTabClicked}
    >
      {tab.name}
    </div>
  );
});

export default Tabs;
