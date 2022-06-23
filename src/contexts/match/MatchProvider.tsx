import { useState } from "react";

import { MatchContext } from "./context";

import { PieceTeam } from "../../models/piece"

interface Props {
  children: React.ReactNode;
}

const MatchProvider = ({ children }: Props) => {
  const [teamTurn, setTeamTurn] = useState<PieceTeam>('light');

  const nextTurn = () => {
    setTeamTurn(prevTeam => prevTeam === 'light' ? 'dark' : 'light');
  }

  return (
    <MatchContext.Provider value={{ teamTurn, nextTurn }}>
      {children}
    </MatchContext.Provider>
  )
};

export default MatchProvider;
