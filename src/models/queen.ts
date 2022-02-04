import { filterPositions, getDiagonalPositionsFor, getPerpendicularPositionsFor } from "../utils/possible_positions";
import ChessPiece, { PieceConstructorProps } from "./chess_piece";

export class Queen extends ChessPiece {
  constructor({ color, position }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'queen', color, position });
  }

  getPossibleSquares() {
    return filterPositions(getPerpendicularPositionsFor(this.position).concat(getDiagonalPositionsFor(this.position)), this.position);
  }
}
