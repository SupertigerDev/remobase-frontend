import LeftPane from './components/LeftPane/LeftPane';
import RightPane from './components/RightPane/RightPane';
import Tabs from './components/TabsPane/TabsPane';

export default function App() {
  return (
    <>
      <Tabs />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
      }}
      >
        <LeftPane />
        <RightPane />
      </div>
    </>
  );
}
