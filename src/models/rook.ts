import { filterPositions, getPerpendicularPositionsFor } from "../utils/possible_positions";
import ChessPiece, { PieceConstructorProps } from "./chess_piece";

export class Rook extends ChessPiece {
  constructor({ color, position }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'rook', color, position });
  }

  getPossibleSquares() {
    return filterPositions(getPerpendicularPositionsFor(this.position), this.position);
  }
}
