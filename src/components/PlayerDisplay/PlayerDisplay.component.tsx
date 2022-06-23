import clsx from 'clsx';
import styles from './PlayerDisplay.module.scss';

interface Props {
  playerName: string;
  playerImageSrc: string;
  clockHighlight: boolean;
  clockTime: string;
  direction: 'auto' | 'reverse';
}

const PlayerDisplay = ({ playerImageSrc, playerName, clockHighlight, clockTime, direction = 'auto' }: Props) => {
  return (
    <div className={clsx(styles.container, { [styles.reverse]: direction === 'reverse' })}>
      <div className={clsx(styles.clock, { [styles.highlight]: clockHighlight })}>
        {clockTime}
      </div>

      <div className={clsx(styles.player_info, { [styles.reverse]: direction === 'reverse' })}>
        <div className={styles.player_img}>
          <img src={playerImageSrc} alt="player" />
        </div>

        {playerName}
      </div>
    </div>
  )
}

export default PlayerDisplay;
