import { createContext } from "react";

import { PieceTeam } from "../../models/piece"
import { ISquareState } from "../../models/square";

export interface MatchContextData {
  teamTurn: PieceTeam;
  boardState: ISquareState[][];
  nextTurn: () => void;
  clickSquare: (square: ISquareState) => void;
}

export const MatchContext = createContext<MatchContextData>({} as MatchContextData);
