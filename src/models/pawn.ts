import ChessPiece, { PiecePosition, PieceProps } from "./chess_piece";

export class Pawn extends ChessPiece {
  possibleSquares: PiecePosition[];
  
  constructor({ color, position }: Omit<PieceProps, 'type'>) {
    super({ type: 'pawn', color, position });

    this.possibleSquares = this.getPossibleSquares();
  }

  setPosition(newPosition: PiecePosition) {
    this.position = newPosition;

    this.possibleSquares = this.getPossibleSquares();
  }

  getPossibleSquares() {
    if (this.color === 'light') {
      if (this.position.x === 6) {
        return [{ x: 5, y: this.position.y }, { x: 4, y: this.position.y }];
      } else {
        return [{ x: this.position.x - 1, y: this.position.y }];
      }
    } else {
      if (this.position.x === 1) {
        return [{ x: 2, y: this.position.y }, { x: 3, y: this.position.y }];
      } else {
        return [{ x: this.position.x + 1, y: this.position.y }];
      }
    }
  }
}
