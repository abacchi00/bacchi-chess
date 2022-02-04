import { filterPositions, getPerpendicularPositionsFor } from "../utils/possible_positions";
import ChessPiece, { PiecePosition, PieceProps } from "./chess_piece";

export class Rook extends ChessPiece {
  possibleSquares: PiecePosition[];
  
  constructor({ color, position }: Omit<PieceProps, 'type'>) {
    super({ type: 'rook', color, position });

    this.possibleSquares = this.getPossibleSquares();
  }

  setPosition(newPosition: PiecePosition) {
    this.position = newPosition;

    this.possibleSquares = this.getPossibleSquares();
  }

  getPossibleSquares() {
    return filterPositions(getPerpendicularPositionsFor(this.position), this.position);
  }
}
