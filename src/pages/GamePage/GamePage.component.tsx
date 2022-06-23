import { default as firstPlayerMockImg } from '../../assets/eu1.png';
import { default as secondPlayerMockImg } from '../../assets/math.jpeg';

import { ChessBoard } from '../../components/ChessBoard';
import { PlayerDisplay } from '../../components/PlayerDisplay';
import { MatchProvider } from '../../contexts/match';

import styles from './GamePage.module.scss';

const GamePage = () => {
  return (
    <MatchProvider>
      <div className={styles.game_page}>
        <PlayerDisplay
          direction="reverse"
          clockTime="10:00"
          playerImageSrc={secondPlayerMockImg}
          playerName="João das Neves Pereira"
          team="dark"
        />

        <ChessBoard />

        <PlayerDisplay
          direction="auto"
          clockTime="9:59"
          playerImageSrc={firstPlayerMockImg}
          playerName="Dom Pedro II"
          team="light"
        />
      </div>
    </MatchProvider>
  )
}

export default GamePage;
