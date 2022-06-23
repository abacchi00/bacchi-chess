import { default as firstPlayerMockImg } from '../../assets/eu1.png';
import { default as secondPlayerMockImg } from '../../assets/math.jpeg';

import { ChessBoard } from '../../components/ChessBoard';
import { PlayerDisplay } from '../../components/PlayerDisplay';

import styles from './GamePage.module.scss';

const GamePage = () => {
  return (
    <div className={styles.game_page}>
      <PlayerDisplay
        direction="reverse"
        clockTime="10:00"
        playerImageSrc={secondPlayerMockImg}
        playerName="João das Neves Pereira"
        clockHighlight={false}
      />

      <ChessBoard />

      <PlayerDisplay
        direction="auto"
        clockTime="9:59"
        playerImageSrc={firstPlayerMockImg}
        playerName="Dom Pedro II"
        clockHighlight={true}
      />
    </div>
  )
}

export default GamePage;
