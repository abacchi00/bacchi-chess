import ChessPiece, { PiecePosition, PieceProps } from "./chess_piece";

export class King extends ChessPiece {
  possibleSquares: PiecePosition[];
  
  constructor({ color, position }: Omit<PieceProps, 'type'>) {
    super({ type: 'king', color, position });

    this.possibleSquares = this.getPossibleSquares();
  }

  setPosition(newPosition: PiecePosition) {
    this.position = newPosition;

    this.possibleSquares = this.getPossibleSquares();
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
