import clsx from "clsx";
import { useDraggable, useDroppable } from "@dnd-kit/core";

import { pieceImgs } from "../../assets/piece_imgs";

import { ISquareState } from "../../models/square";

import { decodePieceId } from "../../utils/decode_piece_id";

import styles from './ChessSquare.module.scss';
import { useMatchContext } from "../../contexts/match";

const ChessSquare = (squareProps: ISquareState) => {
  const { id, type, pieceID, threatID } = squareProps;

  const { teamTurn } = useMatchContext();

  const piece = decodePieceId(pieceID);
  const threat = decodePieceId(threatID);

  const targeted: boolean = !!threat;
  const threatened: boolean = !!piece && !!threat && threat.team !== piece.team;
  const pieceTeamTurn: boolean = teamTurn === piece?.team;

  const {isOver, setNodeRef: droppableRef} = useDroppable({
    id,
    data: squareProps,
  });

  const {attributes, listeners, setNodeRef: dragabbleRef, transform, } = useDraggable({
    id: pieceID ?? id,
    data: squareProps,
    disabled: !pieceTeamTurn,
  });

  return (
    <div
      ref={droppableRef}
      key={id}
      id={id}
      className={clsx(
        styles.chess_square,
        [styles[type]],
        { [styles.overlapped_targeted]: isOver && targeted && !threatened }
      )}
      style={{ gridArea: id }}
    >
      <div className={styles.square_id}>
        {id}
      </div>

      {targeted && !threatened &&
        <div className={styles.possible_move_indicator} />
      }

      {piece && transform &&
        <img
          key={pieceID + 'shadow'}
          alt={(pieceID || undefined) + 'shadow'}
          className={clsx(styles.piece_img, { [styles.selected]: true })}
          src={pieceImgs[`${piece.type}_${piece.team}`]}
        />
      }

      {piece &&
        <img
          draggable={false}
          ref={dragabbleRef}
          {...listeners}
          {...attributes}
          key={pieceID}
          alt={pieceID || undefined}
          style={{
            position: transform ? 'absolute' : undefined,
            zIndex: transform ? '999' : 'auto',
            transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : 'none',
            cursor: !pieceTeamTurn ? 'not-allowed' : transform ? 'grabbing' : 'grab'
          }}
          src={pieceImgs[`${piece.type}_${piece.team}`]}
          className={clsx(styles.piece_img, {
            [styles.threatened]: threatened && !isOver,
            [styles.overlapped_threatened]: isOver && threatened,
          })}
        />
      }
    </div>
  )
}

export default ChessSquare;

