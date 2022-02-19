import { filterPositions, getPerpendicularPositionsFor } from "../utils/possible_positions";
import ChessPiece, { PieceConstructorProps, PiecePosition } from "./chess_piece";

export class Rook extends ChessPiece {
  constructor({ color }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'rook', color });
  }

  getPossibleSquares(currentPosition: PiecePosition): PiecePosition[] {
    return filterPositions(getPerpendicularPositionsFor(currentPosition), currentPosition);
  }
}
