import clsx from 'clsx';
import { useMatchContext } from '../../contexts/match';
import { PieceTeam } from '../../models/piece';
import styles from './PlayerDisplay.module.scss';

interface Props {
  playerName: string;
  playerImageSrc: string;
  clockTime: string;
  direction: 'auto' | 'reverse';
  team: PieceTeam;
}

const PlayerDisplay = ({ playerImageSrc, playerName, clockTime, direction = 'auto', team }: Props) => {
  const { teamTurn } = useMatchContext();

  const isPlayerTurn = team === teamTurn;

  return (
    <div className={clsx(styles.container, { [styles.reverse]: direction === 'reverse' })}>
      <div className={clsx(styles.clock, { [styles.highlight]: isPlayerTurn })}>
        {clockTime}
      </div>

      <div className={clsx(styles.player_info, { [styles.reverse]: direction === 'reverse', [styles.highlight]: isPlayerTurn })}>
        <div className={clsx(styles.player_img, { [styles.highlight]: isPlayerTurn })}>
          <img src={playerImageSrc} alt="player" />
        </div>

        {playerName}
      </div>
    </div>
  )
}

export default PlayerDisplay;
