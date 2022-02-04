import { pieceImgs } from "../assets/piece_imgs";

type PieceType = 'rook' | 'knight' | 'pawn' | 'queen' | 'king' | 'bishop';
type PieceColor = 'dark' | 'light';
export type PiecePosition = { x: number, y: number };

export interface PieceConstructorProps {
  type: PieceType;
  color: PieceColor;
  position: PiecePosition;
}

abstract class ChessPiece {
  type: PieceType;

  color: PieceColor;

  position: PiecePosition;

  possibleSquares: PiecePosition[];

  img: any;

  constructor ({ type, color, position }: PieceConstructorProps) {
    this.type = type;
    this.color = color;
    this.position = position;
    this.img = pieceImgs[`${type}_${color}`];
  
    this.possibleSquares = this.getPossibleSquares();
  }

  abstract getPossibleSquares(): PiecePosition[];

  public setPosition(newPosition: PiecePosition) {
    this.position = newPosition;

    this.possibleSquares = this.getPossibleSquares();
  }
}

export default ChessPiece;
