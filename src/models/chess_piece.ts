import { pieceImgs } from "../assets/piece_imgs";

type PieceType = 'rook' | 'knight' | 'pawn' | 'queen' | 'king' | 'bishop';
type PieceColor = 'dark' | 'light';
export type PiecePosition = { x: number, y: number };

export interface PieceProps {
  type: PieceType;
  color: PieceColor;
  position: PiecePosition;
}

abstract class ChessPiece {
  type: PieceType;

  color: PieceColor;

  position: PiecePosition;

  img: any;

  constructor ({ type, color, position }: PieceProps) {
    this.type = type;
    this.color = color;
    this.position = position;
    this.img = pieceImgs[`${type}_${color}`];
  }

  abstract getPossibleSquares(): PiecePosition[];
}

export default ChessPiece;
