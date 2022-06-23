import { useState } from 'react';

import { ChessSquare } from '../../components/ChessSquare';

import { ISquareState } from '../../models/square';

import { initialBoardState } from './ChessBoard.utils';
import styles from './ChessBoard.module.scss';
import { getTargetedSquares } from '../../utils/possible_moves_calculator';
import { decodePieceId } from '../../utils/decode_piece_id';
import { useMatchContext } from '../../contexts/match';

const ChessBoard = () => {
  const { nextTurn, teamTurn } = useMatchContext();

  const [selectedSquare, setSelectedSquare] = useState<ISquareState | null>(null);
  const [boardState, setBoardState] = useState<ISquareState[][]>(initialBoardState);

  const movePiece = (originSquare: ISquareState, destinationSquare: ISquareState) => {
    const pieceID = originSquare.pieceID;
    
    setBoardState(prevState => {
      const newState = [...prevState];

      newState[originSquare.x][originSquare.y].selected = false;
      newState[originSquare.x][originSquare.y].pieceID = null;

      newState[destinationSquare.x][destinationSquare.y].pieceID = pieceID;
      
      return newState;
    });
  }

  const selectSquare = (square: ISquareState) => {
    setSelectedSquare(square);

    setBoardState(prevState => {
      const newState = [...prevState];

      newState[square.x][square.y].selected = true;

      return newState;
    });
  };

  const clearSquareSelection = () => {
    setSelectedSquare(null);

    setBoardState(prevState => prevState.map(row => row.map(square => ({ ...square, threatID: null, selected: false }))));
  }

  const clickSquare = (square: ISquareState) => {
    const piece = decodePieceId(square.pieceID);
    
    if (!!selectedSquare) {
      if (square.threatID) {
        movePiece(selectedSquare, square);

        nextTurn();
      }

      clearSquareSelection();
    } else if (!!piece && piece.team === teamTurn) {
      selectSquare(square);

      setBoardState(getTargetedSquares(square, boardState));
    }
  }

  console.log('rerender');

  return (
    <div className={styles.board}>
      {boardState.map(row => row.map(squareProps =>
        <ChessSquare
          key={squareProps.id}
          onClick={() => clickSquare(squareProps)}
          {...squareProps}
        />
      ))}
    </div>
  );
};

export default ChessBoard;
