import { getDiagonalPositionsFor, filterPositions } from "../utils/possible_positions";
import ChessPiece, { PieceConstructorProps } from "./chess_piece";

export class Bishop extends ChessPiece {
  constructor({ color, position }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'bishop', color, position });
  }

  getPossibleSquares() {
    return filterPositions(getDiagonalPositionsFor(this.position), this.position);
  }
}
