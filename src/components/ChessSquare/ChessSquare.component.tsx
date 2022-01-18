import clsx from 'clsx';
import styles from './ChessSquare.module.scss'

interface Props {
  id: string;
  isDarkSquare?: boolean;
  showId: boolean;
}

const ChessSquare = ({ id, isDarkSquare, showId }: Props) => {
  return (
    <div
      className={clsx(styles.chess_square, { [styles.dark_square]: isDarkSquare })}
      style={{ gridArea: id }}
    >
      {showId && <div className={styles.square_id}>{id}</div>}
    </div>
  );
};

export default ChessSquare;
