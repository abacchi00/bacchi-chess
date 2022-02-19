import { Bishop } from "../../models/bishop";
import ChessPiece from "../../models/chess_piece";
import { King } from "../../models/king";
import { Knight } from "../../models/knight";
import { Pawn } from "../../models/pawn";
import { Queen } from "../../models/queen";
import { Rook } from "../../models/rook";

const initialSquareState = {
  piece: null,
  threatened: false,
  selected: false,
  possibleMove: false, 
};

export interface SquareState {
  piece: ChessPiece | null;
  threatened: boolean;
  selected: boolean;
  possibleMove: boolean;
  squareColor: 'light' | 'dark';
  id: string,
  coordinate: { x: number, y: number },
}

export const initialBoardState: SquareState[][] = [
  [
    { ...initialSquareState, squareColor: 'light', id: 'a8', coordinate: { x: 0, y: 0 }, piece: new Rook({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'b8', coordinate: { x: 0, y: 1 }, piece: new Knight({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'c8', coordinate: { x: 0, y: 2 }, piece: new Bishop({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'd8', coordinate: { x: 0, y: 3 }, piece: new King({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'e8', coordinate: { x: 0, y: 4 }, piece: new Queen({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'f8', coordinate: { x: 0, y: 5 }, piece: new Bishop({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'g8', coordinate: { x: 0, y: 6 }, piece: new Knight({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'h8', coordinate: { x: 0, y: 7 }, piece: new Rook({ color: 'dark' }) },
  ],
  [
    { ...initialSquareState, squareColor: 'dark',  id: 'a7', coordinate: { x: 1, y: 0 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'b7', coordinate: { x: 1, y: 1 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'c7', coordinate: { x: 1, y: 2 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'd7', coordinate: { x: 1, y: 3 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'e7', coordinate: { x: 1, y: 4 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'f7', coordinate: { x: 1, y: 5 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'g7', coordinate: { x: 1, y: 6 }, piece: new Pawn({ color: 'dark' }) },
    { ...initialSquareState, squareColor: 'light', id: 'h7', coordinate: { x: 1, y: 7 }, piece: new Pawn({ color: 'dark' }) },
  ],
  [
    { ...initialSquareState, squareColor: 'light', id: 'a6', coordinate: { x: 2, y: 0 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'b6', coordinate: { x: 2, y: 1 } },
    { ...initialSquareState, squareColor: 'light', id: 'c6', coordinate: { x: 2, y: 2 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'd6', coordinate: { x: 2, y: 3 } },
    { ...initialSquareState, squareColor: 'light', id: 'e6', coordinate: { x: 2, y: 4 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'f6', coordinate: { x: 2, y: 5 } },
    { ...initialSquareState, squareColor: 'light', id: 'g6', coordinate: { x: 2, y: 6 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'h6', coordinate: { x: 2, y: 7 } },
  ],
  [
    { ...initialSquareState, squareColor: 'dark',  id: 'a5', coordinate: { x: 3, y: 0 } },
    { ...initialSquareState, squareColor: 'light', id: 'b5', coordinate: { x: 3, y: 1 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'c5', coordinate: { x: 3, y: 2 } },
    { ...initialSquareState, squareColor: 'light', id: 'd5', coordinate: { x: 3, y: 3 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'e5', coordinate: { x: 3, y: 4 } },
    { ...initialSquareState, squareColor: 'light', id: 'f5', coordinate: { x: 3, y: 5 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'g5', coordinate: { x: 3, y: 6 } },
    { ...initialSquareState, squareColor: 'light', id: 'h5', coordinate: { x: 3, y: 7 } },
  ],
  [
    { ...initialSquareState, squareColor: 'light', id: 'a4', coordinate: { x: 4, y: 0 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'b4', coordinate: { x: 4, y: 1 } },
    { ...initialSquareState, squareColor: 'light', id: 'c4', coordinate: { x: 4, y: 2 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'd4', coordinate: { x: 4, y: 3 } },
    { ...initialSquareState, squareColor: 'light', id: 'e4', coordinate: { x: 4, y: 4 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'f4', coordinate: { x: 4, y: 5 } },
    { ...initialSquareState, squareColor: 'light', id: 'g4', coordinate: { x: 4, y: 6 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'h4', coordinate: { x: 4, y: 7 } },
  ],
  [
    { ...initialSquareState, squareColor: 'dark',  id: 'a3', coordinate: { x: 5, y: 0 } },
    { ...initialSquareState, squareColor: 'light', id: 'b3', coordinate: { x: 5, y: 1 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'c3', coordinate: { x: 5, y: 2 } },
    { ...initialSquareState, squareColor: 'light', id: 'd3', coordinate: { x: 5, y: 3 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'e3', coordinate: { x: 5, y: 4 } },
    { ...initialSquareState, squareColor: 'light', id: 'f3', coordinate: { x: 5, y: 5 } },
    { ...initialSquareState, squareColor: 'dark',  id: 'g3', coordinate: { x: 5, y: 6 } },
    { ...initialSquareState, squareColor: 'light', id: 'h3', coordinate: { x: 5, y: 7 } },
  ],
  [
    { ...initialSquareState, squareColor: 'light', id: 'a2', coordinate: { x: 6, y: 0 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'b2', coordinate: { x: 6, y: 1 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'c2', coordinate: { x: 6, y: 2 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'd2', coordinate: { x: 6, y: 3 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'e2', coordinate: { x: 6, y: 4 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'f2', coordinate: { x: 6, y: 5 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'g2', coordinate: { x: 6, y: 6 }, piece: new Pawn({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'h2', coordinate: { x: 6, y: 7 }, piece: new Pawn({ color: 'light' }) },
  ],
  [
    { ...initialSquareState, squareColor: 'dark',  id: 'a1', coordinate: { x: 7, y: 0 }, piece: new Rook({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'b1', coordinate: { x: 7, y: 1 }, piece: new Knight({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'c1', coordinate: { x: 7, y: 2 }, piece: new Bishop({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'd1', coordinate: { x: 7, y: 3 }, piece: new King({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'e1', coordinate: { x: 7, y: 4 }, piece: new Queen({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'f1', coordinate: { x: 7, y: 5 }, piece: new Bishop({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'dark',  id: 'g1', coordinate: { x: 7, y: 6 }, piece: new Knight({ color: 'light' }) },
    { ...initialSquareState, squareColor: 'light', id: 'h1', coordinate: { x: 7, y: 7 }, piece: new Rook({ color: 'light' }) },
  ],
]

export type BoardPiece = 'bl1' | 'bl2' | 'bd1' | 'bd2'
  | 'rl1' | 'rl2' | 'rd1' | 'rd2'
  | 'ql' | 'qd'
  | 'kl' | 'kd'
  | 'nl1' | 'nl2' | 'nd1' | 'nd2'
  | 'pl1' | 'pl2' | 'pl3' | 'pl4' | 'pl5' | 'pl6' | 'pl7' | 'pl8'
  | 'pd1' | 'pd2' | 'pd3' | 'pd4' | 'pd5' | 'pd6' | 'pd7' | 'pd8';
