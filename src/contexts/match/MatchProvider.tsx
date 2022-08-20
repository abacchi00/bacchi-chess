import { useCallback, useState } from "react";

import { MatchContext } from "./context";

import { PieceTeam } from "../../models/piece"
import { ISquareState } from "../../models/square";
import { initialBoardState } from "./utils";
import { decodePieceId } from "../../utils/decode_piece_id";
import { getTargetedSquares } from "../../utils/possible_moves_calculator";

interface Props {
  children: React.ReactNode;
}

const pieceMoveAudio = new Audio("/piece_move.mp3");
const pieceDropAudio = new Audio("/piece_drop.mp3");

const MatchProvider = ({ children }: Props) => {
  const [teamTurn, setTeamTurn] = useState<PieceTeam>('light');
  const [selectedSquare, setSelectedSquare] = useState<ISquareState | null>(null);
  const [boardState, setBoardState] = useState<ISquareState[][]>(initialBoardState);

  const nextTurn = () => {
    setTeamTurn(prevTeam => prevTeam === 'light' ? 'dark' : 'light');
  };

  const movePiece = (originSquare: ISquareState, destinationSquare: ISquareState) => {
    const pieceID = originSquare.pieceID;

    setBoardState(prevState => {
      const newState = [...prevState];

      newState[originSquare.x][originSquare.y].selected = false;
      newState[originSquare.x][originSquare.y].pieceID = null;

      newState[destinationSquare.x][destinationSquare.y].pieceID = pieceID;

      return newState;
    });

    if (destinationSquare.pieceID) pieceDropAudio.play();
    else pieceMoveAudio.play();
  };

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
  };

  const clickSquare = useCallback((square: ISquareState) => {
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
  }, [boardState, selectedSquare, teamTurn]);

  return (
    <MatchContext.Provider value={{ teamTurn, nextTurn, clickSquare, boardState }}>
      {children}
    </MatchContext.Provider>
  )
};

export default MatchProvider;
