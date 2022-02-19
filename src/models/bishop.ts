import { getDiagonalPositionsFor, filterPositions } from "../utils/positions";
import ChessPiece, { PieceConstructorProps, PiecePosition } from "./chess_piece";

export class Bishop extends ChessPiece {
  constructor({ color }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'bishop', color });
  }

  getPossibleSquares(currentPosition: PiecePosition): PiecePosition[] {
    return filterPositions(getDiagonalPositionsFor(currentPosition), currentPosition);
  }
}
