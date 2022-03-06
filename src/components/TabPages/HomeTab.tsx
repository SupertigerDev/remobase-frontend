import styles from './HomeTab.module.css';

function Card({ src, name }: {src: string, name: string}) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={src} alt="" />
      <div className={styles.cardName}>{name}</div>
    </div>
  );
}

function NewConnectionSection() {
  return (
    <>
      <div className={styles.title}>Add Connection</div>
      <div className={styles.services}>
        <Card name="MongoDB" src="public/icons/mongodb-icon.svg" />
        <Card name="Redis" src="public/icons/redis-icon.svg" />
      </div>
    </>
  );
}

export default function HomeTab() {
  return (
    <div className={styles.container}>
      <NewConnectionSection />
    </div>
  );
}
