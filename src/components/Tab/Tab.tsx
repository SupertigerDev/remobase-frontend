import { observer } from 'mobx-react-lite';
import { IoMdClose } from 'react-icons/io';
import store from '../../store/store';
import Tab from '../../store/Tab.store';
import styles from './Tab.module.css';
import Clickable from '../Clickable';

interface Props {
  tab: Tab
}

const Tabs = observer(({ tab }: Props) => {
  const { tabs } = store;
  const isTabSelected = tabs.selectedTabId === tab.id;
  const onTabClicked = () => tabs.changeTab(tab.id);

  const { Icon, title } = tab;

  const onCloseClicked = (e: any) => {
    e.stopPropagation();
    tabs.close(tab.id);
  };

  return (
    <Clickable
      className={`${styles.container} ${isTabSelected && styles.selected}`}
      onClick={onTabClicked}
    >
      <div className={styles.icon}>{Icon}</div>
      <div className={styles.title}>{title}</div>
      <Clickable
        className={styles.closeButton}
        onClick={onCloseClicked}
      >
        <IoMdClose />
      </Clickable>
    </Clickable>
  );
});

export default Tabs;
