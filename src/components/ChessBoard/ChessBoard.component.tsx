import { useState } from 'react';

import { ChessSquare } from '../../components/ChessSquare';

import { PiecePosition } from '../../models/chess_piece';


import { arePositionsEqual } from '../../utils/positions';

import { initialBoardState, SquareState } from './ChessBoard.utils';
import styles from './ChessBoard.module.scss';

interface Props {
  showSquaresIds: boolean;
}

const ChessBoard = ({ showSquaresIds }: Props) => {
  const [selectedPosition, setSelectedPosition] = useState<PiecePosition | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<PiecePosition[]>([]);
  const [boardState, setBoardState] = useState<SquareState[][]>(initialBoardState);

  const updateBoardState = (updates: Array<{ position: PiecePosition, changes: Partial<SquareState> }>) => {
    setBoardState(prevState => {
      const newState = [...prevState];

      updates.forEach(({ position: { x, y }, changes }) => {
        newState[x][y] = { ...prevState[x][y], ...changes };
      });

      return newState;
    });
  }
  
  const updateSquareState = (position: PiecePosition, changes: Partial<SquareState>) => {
    updateBoardState([{ position, changes }]);
  }

  const movePiece = (origin: PiecePosition, destination: PiecePosition) => {
    updateBoardState([
      { position: destination, changes: { piece: boardState[origin.x][origin.y].piece } },
      { position: origin, changes: { piece: null } },
    ]);
  }

  const selectSquare = (square: SquareState) => {
    setSelectedPosition(square.coordinate);

    updateSquareState(square.coordinate, { selected: true });
  };

  const showPossibleMovesFor = (square: SquareState) => {
    const possibleMovesForSquare = square.piece?.getPossibleSquares(square.coordinate) || [];

    setPossibleMoves(possibleMovesForSquare);

    const possibleMoveChanges = possibleMovesForSquare.map(position => ({
      position, changes: { possibleMove: true, threatened: !!boardState[position.x][position.y].piece }
    })) || [];
    
    updateBoardState(possibleMoveChanges);
  }

  const clearSquareSelection = () => {
    setSelectedPosition(null);

    setPossibleMoves([]);

    setBoardState(prevState => prevState.map(row => row.map(square => ({ ...square, possibleMove: false, selected: false, threatened: false }))));
  }

  const isPositionInPossibleMoves = (position: PiecePosition) => {
    return possibleMoves.some(possibleMove => arePositionsEqual(possibleMove, position));
  }

  const clickSquare = (position: PiecePosition) => {
    const square = boardState[position.x][position.y];

    if (!!selectedPosition) {
      if (isPositionInPossibleMoves(position)) movePiece(selectedPosition, position);

      clearSquareSelection();
    } else {
      selectSquare(square);

      showPossibleMovesFor(square);
    }
  }

  console.log('rerender');

  return (
    <div className={styles.board}>
      {boardState.map(row => row.map(squareProps =>
        <ChessSquare
          key={squareProps.id}
          showId={showSquaresIds}
          onClick={() => clickSquare(squareProps.coordinate)}
          {...squareProps}
        />
      ))}
    </div>
  );
};

export default ChessBoard;
