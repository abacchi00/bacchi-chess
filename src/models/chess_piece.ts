import { pieceImgs } from "../assets/piece_imgs";

type PieceType = 'rook' | 'knight' | 'pawn' | 'queen' | 'king' | 'bishop';
type PieceColor = 'dark' | 'light';
export type PiecePosition = { x: number, y: number };

export interface PieceConstructorProps {
  type: PieceType;
  color: PieceColor;
}

abstract class ChessPiece {
  type: PieceType;

  color: PieceColor;

  img: any;

  constructor ({ type, color }: PieceConstructorProps) {
    this.type = type;
    this.color = color;
    this.img = pieceImgs[`${type}_${color}`];
  }

  abstract getPossibleSquares(currentPosition: PiecePosition): PiecePosition[];
}

export default ChessPiece;
