import { useEffect, useState } from 'react';
import { ChessBoard } from '../../components/ChessBoard';
import { InGameOptions } from '../../components/InGameOptions';
import { PlayerDisplay } from '../../components/PlayerDisplay';
import styles from './GamePage.module.scss';

const GamePage = () => {
  const [playerSeconds, setPlayerSeconds] = useState(600);
  const [opponentSeconds, setOpponentSeconds] = useState(600);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [showSquaresIds, setShowSquaresIds] = useState(true);


  useEffect(() => {
    if (!!playerTurn) {
      setTimeout(() => setPlayerSeconds(playerSeconds - 1), 1000);
    } else {
      setTimeout(() => setOpponentSeconds(opponentSeconds - 1), 1000);
    }
  }, [opponentSeconds, playerSeconds, playerTurn]);

  return (
    <div className={styles.game_page}>
      <PlayerDisplay
        isOpponent
        timeRemaining={`${Math.floor(opponentSeconds/60).toString().padStart(2, '0')}:${(opponentSeconds%60).toString().padStart(2, '0')}`}
        isTurn={!playerTurn}
      />

      <div style={{ position: 'relative' }}>
        <InGameOptions
          onChangeClock={() => setPlayerTurn(prevTurn => !prevTurn)}
          enableSquaresIds={() => setShowSquaresIds(prevState => !prevState)}
        />

        <ChessBoard showSquaresIds={showSquaresIds}/>
      </div>

      <PlayerDisplay
        timeRemaining={`${Math.floor(playerSeconds/60).toString().padStart(2, '0')}:${(playerSeconds%60).toString().padStart(2, '0')}`}
        isTurn={playerTurn}
      />
    </div>
  )
}

export default GamePage;
