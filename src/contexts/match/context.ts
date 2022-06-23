import { createContext } from "react";

import { PieceTeam } from "../../models/piece"

export interface MatchContextData {
  teamTurn: PieceTeam;
  nextTurn: () => void;
}

export const MatchContext = createContext<MatchContextData>({} as MatchContextData);
