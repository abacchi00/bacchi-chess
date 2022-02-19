import { filterPositions, getDiagonalPositionsFor, getPerpendicularPositionsFor } from "../utils/possible_positions";
import ChessPiece, { PieceConstructorProps, PiecePosition } from "./chess_piece";

export class Queen extends ChessPiece {
  constructor({ color }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'queen', color });
  }

  getPossibleSquares(currentPosition: PiecePosition): PiecePosition[] {
    return filterPositions(getPerpendicularPositionsFor(currentPosition).concat(getDiagonalPositionsFor(currentPosition)), currentPosition);
  }
}
