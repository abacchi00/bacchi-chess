import { useState } from 'react';

import { PiecePosition } from '../../models/chess_piece';
import { ChessSquare } from '../ChessSquare';

import { BoardPiece, initialBoardState, squaresProps } from './ChessBoard.utils';
import styles from './ChessBoard.module.scss';

interface Props {
  showSquaresIds: boolean;
}

const ChessBoard = ({ showSquaresIds }: Props) => {
  const [boardPieces, setBoardPieces] = useState(initialBoardState);

  const [selectedPiece, setSelectedPiece] = useState<BoardPiece | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<PiecePosition[]>([]);

  const selectPiece = (pieceKey: BoardPiece) => {
    setSelectedPiece(pieceKey);

    setPossibleMoves(boardPieces[pieceKey].possibleSquares);
  }

  const changePosition = (newPosition: PiecePosition) => {
    if (!selectedPiece || !isInPossibleMoves(newPosition)) return;

    const newPiece = boardPieces[selectedPiece];
    newPiece.setPosition(newPosition);

    setBoardPieces(prevPieces => ({ ...prevPieces, [selectedPiece]: newPiece }));
    setSelectedPiece(null);
    setPossibleMoves([]);
  }

  const isInPossibleMoves = (coordinate: PiecePosition) => {
    return possibleMoves.some(possibleCoordinate => possibleCoordinate.x === coordinate.x && possibleCoordinate.y === coordinate.y)
  }

  console.log('rerender');

  return (
    <div className={styles.board}>
      {squaresProps.map(row =>
        row.map(props =>
          <ChessSquare
            showId={showSquaresIds}
            onClick={() => changePosition(props.coordinate)}
            highlight={isInPossibleMoves(props.coordinate)}
            {...props}
          />
        )
      )}

      {Object.keys(boardPieces).map(key => {
        const pieceKey = key as BoardPiece;

        const piece = boardPieces[pieceKey];

        return (
          <img
            onClick={() => selectPiece(pieceKey)}
            key={key}
            src={piece.img}
            alt={key}
            width={72}
            height={72}
            style={{
              position: 'absolute',
              top: `calc(${piece.position.x} * 72px)`,
              left: `calc(${piece.position.y} * 72px)`,
              cursor: 'pointer',
              backgroundColor: selectedPiece === pieceKey ? 'rgba(255, 42, 109, 0.5)' : 'transparent',
            }}
          />
        );
      })}  
    </div>
  );
};

export default ChessBoard;
