import ChessPiece, { PieceConstructorProps } from "./chess_piece";

export class Pawn extends ChessPiece {
  constructor({ color, position }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'pawn', color, position });
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
