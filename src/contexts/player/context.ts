import { createContext } from "react";

export interface PlayerContextData {
  timer: number;
  turn: boolean;
}

export const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData);
