import clsx from "clsx";
import { DragPreviewImage, useDrag, useDrop } from "react-dnd";

import { pieceImgs } from "../../assets/piece_imgs";

import { useMatchContext } from "../../contexts/match";

import { ISquareState } from "../../models/square";

import { decodePieceId } from "../../utils/decode_piece_id";

import styles from './ChessSquare.module.scss';

const ChessSquare = (squareProps: ISquareState) => {
  const { id, type, selected, pieceID, threatID } = squareProps;

  const { clickSquare } = useMatchContext();

  const piece = decodePieceId(pieceID);
  const threat = decodePieceId(threatID);

  const targeted: boolean = !!threat;
  const threatened: boolean = !!piece && !!threat && threat.team !== piece.team;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'chessPiece',
    drop: () => clickSquare(squareProps),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }), [clickSquare])

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'chessPiece',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div
      ref={drop}
      className={clsx(
        styles.chess_square,
        [styles[type]],
        { [styles.overlapped_targeted]: isOver && targeted && !threatened }
      )}
      style={{ gridArea: id }}
      onDragStart={() => clickSquare(squareProps)}
    >
      <DragPreviewImage connect={preview} src={piece ? pieceImgs[`${piece.type}_${piece.team}`] : ''}  />
      
      <div className={styles.square_id}>
        {id}
      </div>

      {targeted && !threatened &&
        <div className={styles.possible_move_indicator} />
      }
    
      {piece &&
        <img
          ref={drag}
          key={id}
          alt={id}
          width={72}
          height={72}
          style={{ opacity: isDragging ? 0.7 : 1 }}
          src={pieceImgs[`${piece.type}_${piece.team}`]}
          className={clsx(
            styles.piece_img,
            {
              [styles.selected]: selected,
              [styles.threatened]: threatened && !isOver,
              [styles.overlapped_threatened]: isOver && threatened,
            }
          )}
        />
      }
    </div>
  )
}

export default ChessSquare;

