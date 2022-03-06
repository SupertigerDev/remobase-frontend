import { observer } from 'mobx-react-lite';
import store from '../../store/store';

const RightPane = observer(() => {
  const { selectedTab, selectedTabId } = store.tabs;
  return (
    <div>
      <selectedTab.Component />
      {selectedTabId}
    </div>
  );
});

export default RightPane;
