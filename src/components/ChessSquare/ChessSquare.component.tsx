import clsx from "clsx";

import { pieceImgs } from "../../assets/piece_imgs";
import { ISquareState } from "../../models/square";
import { decodePieceId } from "../../utils/decode_piece_id";

import styles from './ChessSquare.module.scss';

interface Props extends Omit<ISquareState, 'x' | 'y'> {
  onClick: () => void;
}

const ChessSquare = ({ id, type, selected, pieceID, threatID, onClick }: Props) => {
  const piece = decodePieceId(pieceID);
  const threat = decodePieceId(threatID);

  const targeted: boolean = !!threat;
  const threatened: boolean = !!piece && !!threat && threat.team !== piece.team;

  return (
    <div className={clsx(styles.chess_square, [styles[type]])} style={{ gridArea: id }} onClick={onClick}>
      <div className={styles.square_id}>
        {id}
      </div>

      {targeted && !threatened &&
        <div className={styles.possible_move_indicator} />
      }
    
      {piece &&
        <img
          key={id}
          alt={id}
          width={72}
          height={72}
          src={pieceImgs[`${piece.type}_${piece.team}`]}
          className={clsx(styles.piece_img, { [styles.selected]: selected, [styles.threatened]: threatened })}
        />
      }
    </div>
  )
}

export default ChessSquare;

