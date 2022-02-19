import ChessPiece, { PieceConstructorProps, PiecePosition } from "./chess_piece";

export class King extends ChessPiece {
  constructor({ color }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'king', color });
  }

  getPossibleSquares(currentPosition: PiecePosition): PiecePosition[] {
    return [
      { x: currentPosition.x + 1, y: currentPosition.y + 1 },
      { x: currentPosition.x + 1, y: currentPosition.y },
      { x: currentPosition.x + 1, y: currentPosition.y - 1 },
      { x: currentPosition.x, y: currentPosition.y + 1 },
      { x: currentPosition.x, y: currentPosition.y - 1 },
      { x: currentPosition.x - 1, y: currentPosition.y + 1 },
      { x: currentPosition.x - 1, y: currentPosition.y },
      { x: currentPosition.x - 1, y: currentPosition.y - 1 },
    ].filter(({ x, y }) => x <= 7 && x >= 0 && y <= 7 && y >= 0 );
  }
}
