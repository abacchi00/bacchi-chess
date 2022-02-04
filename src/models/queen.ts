import { filterPositions, getDiagonalPositionsFor, getPerpendicularPositionsFor } from "../utils/possible_positions";
import ChessPiece, { PiecePosition, PieceProps } from "./chess_piece";

export class Queen extends ChessPiece {
  possibleSquares: PiecePosition[];
  
  constructor({ color, position }: Omit<PieceProps, 'type'>) {
    super({ type: 'queen', color, position });

    this.possibleSquares = this.getPossibleSquares();
  }

  setPosition(newPosition: PiecePosition) {
    this.position = newPosition;

    this.possibleSquares = this.getPossibleSquares();
  }

  getPossibleSquares() {
    return filterPositions(getPerpendicularPositionsFor(this.position).concat(getDiagonalPositionsFor(this.position)), this.position);
  }
}
