import { observer } from 'mobx-react-lite';
import store from '../../store/store';

const RightPane = observer(() => {
  const { selectedTab } = store.tabs;
  return (
    <div>
      <selectedTab.Component />
    </div>
  );
});

export default RightPane;
