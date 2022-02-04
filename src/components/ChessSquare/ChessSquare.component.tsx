import clsx from 'clsx';
import styles from './ChessSquare.module.scss'

interface Props {
  id: string;
  isDarkSquare?: boolean;
  showId: boolean;
  highlight: boolean;
  onClick: () => void;
}

const ChessSquare = ({ id, isDarkSquare, showId, onClick, highlight }: Props) => {
  return (
    <div
      className={clsx(styles.chess_square, { [styles.dark_square]: isDarkSquare })}
      style={{ gridArea: id, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClick}
    >
      {showId && <div className={styles.square_id}>{id}</div>}

      {highlight && <div style={{ width: '24px', height: '24px', backgroundColor: 'rgba(255, 42, 109, 0.5)', borderRadius: '50%' }} />}
    </div>
  );
};

export default ChessSquare;
