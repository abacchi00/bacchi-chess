import { getDiagonalPositionsFor, filterPositions } from "../utils/possible_positions";
import ChessPiece, { PiecePosition, PieceProps } from "./chess_piece";

export class Bishop extends ChessPiece {
  possibleSquares: PiecePosition[];
  
  constructor({ color, position }: Omit<PieceProps, 'type'>) {
    super({ type: 'bishop', color, position });

    this.possibleSquares = this.getPossibleSquares();
  }

  setPosition(newPosition: PiecePosition) {
    this.position = newPosition;

    this.possibleSquares = this.getPossibleSquares();
  }

  getPossibleSquares() {
    return filterPositions(getDiagonalPositionsFor(this.position), this.position);
  }
}
