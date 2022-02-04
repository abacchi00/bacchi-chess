import ChessPiece, { PieceConstructorProps } from "./chess_piece";

export class King extends ChessPiece {
  constructor({ color, position }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'king', color, position });
  }

  getPossibleSquares() {
    return [
      { x: this.position.x + 1, y: this.position.y + 1 },
      { x: this.position.x + 1, y: this.position.y },
      { x: this.position.x + 1, y: this.position.y - 1 },
      { x: this.position.x, y: this.position.y + 1 },
      { x: this.position.x, y: this.position.y - 1 },
      { x: this.position.x - 1, y: this.position.y + 1 },
      { x: this.position.x - 1, y: this.position.y },
      { x: this.position.x - 1, y: this.position.y - 1 },
    ].filter(({ x, y }) => x <= 7 && x >= 0 && y <= 7 && y >= 0 );
  }
}
