import { default as firstPlayerMockImg } from '../../assets/eu1.png';
import { default as secondPlayerMockImg } from '../../assets/math.jpeg';

import { ChessBoard } from '../../components/ChessBoard';
import { PlayerDisplay } from '../../components/PlayerDisplay';

import { MatchProvider } from '../../contexts/match';
import { PlayerProvider } from '../../contexts/player';

import styles from './GamePage.module.scss';

const GamePage = () => {
  return (
    <MatchProvider>
      <div className={styles.game_page}>
        <PlayerProvider team="dark">
          <PlayerDisplay
            direction="reverse"
            playerImageSrc={secondPlayerMockImg}
            playerName="João das Neves Pereira"
          />
        </PlayerProvider>
        
        <ChessBoard />

        <PlayerProvider team="light">
          <PlayerDisplay
            direction="auto"
            playerImageSrc={firstPlayerMockImg}
            playerName="Dom Pedro II"
          />
        </PlayerProvider>
      </div>
    </MatchProvider>
  )
}

export default GamePage;
