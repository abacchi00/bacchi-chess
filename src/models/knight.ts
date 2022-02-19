import ChessPiece, { PieceConstructorProps, PiecePosition } from "./chess_piece";

export class Knight extends ChessPiece {
  constructor({ color }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'knight', color });
  }

  getPossibleSquares(currentPosition: PiecePosition): PiecePosition[] {
    return [
      { x: currentPosition.x + 2, y: currentPosition.y + 1 },
      { x: currentPosition.x + 1, y: currentPosition.y + 2 },
      { x: currentPosition.x - 2, y: currentPosition.y + 1 },
      { x: currentPosition.x - 1, y: currentPosition.y + 2 },
      { x: currentPosition.x - 2, y: currentPosition.y - 1 },
      { x: currentPosition.x - 1, y: currentPosition.y - 2 },
      { x: currentPosition.x + 2, y: currentPosition.y - 1 },
      { x: currentPosition.x + 1, y: currentPosition.y - 2 },
    ].filter(({ x, y }) => x <= 7 && x >= 0 && y <= 7 && y >= 0 );
  }
}
