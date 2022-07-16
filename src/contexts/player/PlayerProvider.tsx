import { useEffect, useState } from "react";
import { PieceTeam } from "../../models/piece";
import { useMatchContext } from "../match";
import { PlayerContext } from "./context";

interface Props {
  team: PieceTeam;
  children: React.ReactNode;
}

const PlayerProvider = ({ children, team }: Props) => {
  const [timer, setTimer] = useState<number>(600);
  const [turn, setTurn] = useState(false);
  const { teamTurn } = useMatchContext();

  useEffect(() => {
    setTurn(team === teamTurn);
  }, [team, teamTurn])

  useEffect(() => {
    const interval = timer > 0 && turn && setInterval(() => setTimer(prevTimer => prevTimer - 1), 1000)

    if (!!interval) return () => clearInterval(interval);
  }, [teamTurn, timer, turn]);

  return (
    <PlayerContext.Provider value={{ turn, timer }}>
      {children}
    </PlayerContext.Provider>
  )
};

export default PlayerProvider;
