import { PieceID, PieceTeam, pieceTeamsByLetter, PieceType, pieceTypesByLetter } from "../models/piece";

export type DecodedPieceProps = { type: PieceType, team: PieceTeam, num: number } | null;

export const decodePieceId = (pieceID: PieceID | null): DecodedPieceProps => {
  if (!pieceID) return null;
  
  const [pieceTypeLetter, pieceTeamLetter, pieceNum] = pieceID.split('');

  return { type: pieceTypesByLetter[pieceTypeLetter], team: pieceTeamsByLetter[pieceTeamLetter], num: Number(pieceNum) }
}
