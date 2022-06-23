import { PieceID, PieceTeam, pieceTeamsByLetter, PieceType, pieceTypesByLetter } from "../models/piece";

export const decodePieceId = (pieceID: PieceID | null): { type: PieceType, team: PieceTeam, num: number } | null => {
  if (!pieceID) return null;
  
  const [pieceTypeLetter, pieceTeamLetter, pieceNum] = pieceID.split('');

  return { type: pieceTypesByLetter[pieceTypeLetter], team: pieceTeamsByLetter[pieceTeamLetter], num: Number(pieceNum) }
}
