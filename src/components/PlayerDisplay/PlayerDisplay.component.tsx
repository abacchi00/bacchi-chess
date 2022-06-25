import clsx from 'clsx';

import { usePlayerContext } from '../../contexts/player';

import styles from './PlayerDisplay.module.scss';

interface Props {
  playerName: string;
  playerImageSrc: string;
  direction: 'auto' | 'reverse';
}

const PlayerDisplay = ({ playerImageSrc, playerName, direction = 'auto' }: Props) => {
  const { timer, turn } = usePlayerContext();

  return (
    <div className={clsx(styles.container, { [styles.reverse]: direction === 'reverse' })}>
      <div className={clsx(styles.clock, { [styles.highlight]: turn })}>
        {Math.floor(timer / 60) + ':' + (timer % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
      </div>

      <div className={clsx(styles.player_info, { [styles.reverse]: direction === 'reverse', [styles.highlight]: turn })}>
        <div className={clsx(styles.player_img, { [styles.highlight]: turn })}>
          <img src={playerImageSrc} alt="player" />
        </div>

        {playerName}
      </div>
    </div>
  )
}

export default PlayerDisplay;
