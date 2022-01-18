import clsx from 'clsx';
import styles from './PlayerDisplay.module.scss';

import { default as player1 } from '../../assets/eu1.png';
import { default as player2 } from '../../assets/math.jpeg';

interface Props {
  isOpponent?: boolean;
  timeRemaining: string;
  isTurn: boolean;
}

const PlayerDisplay = ({ isOpponent, timeRemaining, isTurn }: Props) => {
  return (
    <div className={clsx(styles.container, { [styles.opponent]: isOpponent })}>
      <div className={clsx(styles.clock, { [styles.my_turn]: isTurn })}>
        {timeRemaining}
      </div>

      <div className={clsx(styles.player_info, { [styles.opponent]: isOpponent })}>
        <div className={styles.player_img}>
          <img src={isOpponent ? player2 : player1} alt="player" />
        </div>

        {isOpponent ? 'Adoniran Barbosa' : 'Serginho Malandro'}
      </div>
    </div>
  )
}

export default PlayerDisplay;
