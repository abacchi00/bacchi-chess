import clsx from 'clsx';
import ChessPiece from '../../models/chess_piece';
import styles from './ChessSquare.module.scss'

interface Props {
  id: string;
  showId: boolean;
  piece: ChessPiece | null;
  squareColor: 'light' | 'dark';
  threatened: boolean;
  selected: boolean;
  possibleMove: boolean; 
  onClick: () => void;
}

const ChessSquare = ({ id, showId, piece, squareColor, threatened, selected, possibleMove, onClick }: Props) => {
  const backgroundColor = selected ? 'rgba(255, 42, 109, 0.5)' : threatened ? 'rgba(255, 255, 0, 0.5)' : 'transparent'
  
  return (
    <div
      className={clsx(styles.chess_square, { [styles.dark_square]: squareColor === 'dark' })}
      style={{ gridArea: id, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClick}
    >
      {showId && <div className={styles.square_id}>{id}</div>}

      {possibleMove && <div style={{ width: '24px', height: '24px', backgroundColor: 'rgba(255, 42, 109, 0.5)', borderRadius: '50%' }} />}
    
      {piece &&
        <img
          key={id} // todo change
          alt={id} // todo change
          src={piece.img}
          width={72}
          height={72}
          style={{ backgroundColor }}
        />
      }
    </div>
  );
};

export default ChessSquare;
