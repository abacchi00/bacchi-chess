import './styles/global.scss';
import styles from './App.module.scss';
import { GamePage } from './pages/GamePage';

// teste

function App() {
  return (
    <div className={styles.app_container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          BacchiChess
        </div>
      </div>

      <div className={styles.content}>
        <GamePage />
      </div>

      <div className={styles.footer}>
        Developed by André Rossini Bacchi | 2022
      </div>
    </div>
  );
}

export default App;
