import ChessPiece, { PieceConstructorProps, PiecePosition } from "./chess_piece";

export class Pawn extends ChessPiece {
  constructor({ color }: Omit<PieceConstructorProps, 'type'>) {
    super({ type: 'pawn', color });
  }

  getPossibleSquares(currentPosition: PiecePosition): PiecePosition[] {
    if (this.color === 'light') {
      if (currentPosition.x === 6) {
        return [{ x: 5, y: currentPosition.y }, { x: 4, y: currentPosition.y }];
      } else {
        return [{ x: currentPosition.x - 1, y: currentPosition.y }];
      }
    } else {
      if (currentPosition.x === 1) {
        return [{ x: 2, y: currentPosition.y }, { x: 3, y: currentPosition.y }];
      } else {
        return [{ x: currentPosition.x + 1, y: currentPosition.y }];
      }
    }
  }
}
