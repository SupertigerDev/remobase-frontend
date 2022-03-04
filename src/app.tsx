import LeftPane from './components/LeftPane';
import Tabs from './components/Tabs';

export default function App() {
  return (
    <>
      <Tabs />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
      >
        <LeftPane />
      </div>
    </>
  );
}
