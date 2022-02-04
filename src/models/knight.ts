import ChessPiece, { PieceConstructorProps } from "./chess_piece";

export class Knight extends ChessPiece {
  constructor({ color, position }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'knight', color, position });
  }

  getPossibleSquares() {
    return [
      { x: this.position.x + 2, y: this.position.y + 1 },
      { x: this.position.x + 1, y: this.position.y + 2 },
      { x: this.position.x - 2, y: this.position.y + 1 },
      { x: this.position.x - 1, y: this.position.y + 2 },
      { x: this.position.x - 2, y: this.position.y - 1 },
      { x: this.position.x - 1, y: this.position.y - 2 },
      { x: this.position.x + 2, y: this.position.y - 1 },
      { x: this.position.x + 1, y: this.position.y - 2 },
    ].filter(({ x, y }) => x <= 7 && x >= 0 && y <= 7 && y >= 0 );
  }
}
