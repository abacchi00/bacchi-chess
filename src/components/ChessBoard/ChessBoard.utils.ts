import { Bishop } from "../../models/bishop";
import { King } from "../../models/king";
import { Knight } from "../../models/knight";
import { Pawn } from "../../models/pawn";
import { Queen } from "../../models/queen";
import { Rook } from "../../models/rook";

export const initialBoardState = {
  bl1: new Bishop({ color: 'light', position: { x: 7, y: 2 } }),
  bl2: new Bishop({ color: 'light', position: { x: 7, y: 5 } }),
  bd1: new Bishop({ color: 'dark', position: { x: 0, y: 5 } }),
  bd2: new Bishop({ color: 'dark', position: { x: 0, y: 2 } }),
  rl1: new Rook({ color: 'light', position: { x: 7, y: 0 } }),
  rl2: new Rook({ color: 'light', position: { x: 7, y: 7 } }),
  rd1: new Rook({ color: 'dark', position: { x: 0, y: 7 } }),
  rd2: new Rook({ color: 'dark', position: { x: 0, y: 0 } }),
  ql: new Queen({ color: 'light', position: { x: 7, y: 4 } }),
  qd: new Queen({ color: 'dark', position: { x: 0, y: 4 } }),
  kl: new King({ color: 'light', position: { x: 7, y: 3 } }),
  kd: new King({ color: 'dark', position: { x: 0, y: 3 } }),
  nl1: new Knight({ color: 'light', position: { x: 7, y: 1 } }),
  nl2: new Knight({ color: 'light', position: { x: 7, y: 6 } }),
  nd1: new Knight({ color: 'dark', position: { x: 0, y: 6 } }),
  nd2: new Knight({ color: 'dark', position: { x: 0, y: 1 } }),
  pl1: new Pawn({ color: 'light', position: { x: 6, y: 0 } }),
  pl2: new Pawn({ color: 'light', position: { x: 6, y: 1 } }),
  pl3: new Pawn({ color: 'light', position: { x: 6, y: 2 } }),
  pl4: new Pawn({ color: 'light', position: { x: 6, y: 3 } }),
  pl5: new Pawn({ color: 'light', position: { x: 6, y: 4 } }),
  pl6: new Pawn({ color: 'light', position: { x: 6, y: 5 } }),
  pl7: new Pawn({ color: 'light', position: { x: 6, y: 6 } }),
  pl8: new Pawn({ color: 'light', position: { x: 6, y: 7 } }),
  pd1: new Pawn({ color: 'dark', position: { x: 1, y: 0 } }),
  pd2: new Pawn({ color: 'dark', position: { x: 1, y: 1 } }),
  pd3: new Pawn({ color: 'dark', position: { x: 1, y: 2 } }),
  pd4: new Pawn({ color: 'dark', position: { x: 1, y: 3 } }),
  pd5: new Pawn({ color: 'dark', position: { x: 1, y: 4 } }),
  pd6: new Pawn({ color: 'dark', position: { x: 1, y: 5 } }),
  pd7: new Pawn({ color: 'dark', position: { x: 1, y: 6 } }),
  pd8: new Pawn({ color: 'dark', position: { x: 1, y: 7 } }),
};

export type BoardPiece = 'bl1' | 'bl2' | 'bd1' | 'bd2'
  | 'rl1' | 'rl2' | 'rd1' | 'rd2'
  | 'ql' | 'qd'
  | 'kl' | 'kd'
  | 'nl1' | 'nl2' | 'nd1' | 'nd2'
  | 'pl1' | 'pl2' | 'pl3' | 'pl4' | 'pl5' | 'pl6' | 'pl7' | 'pl8'
  | 'pd1' | 'pd2' | 'pd3' | 'pd4' | 'pd5' | 'pd6' | 'pd7' | 'pd8';

const zeroToSeven = Array.from(Array(8).keys());
const sevenToZero = zeroToSeven.reverse();

export const squaresProps = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((letter, letterIdx) => zeroToSeven.map(num => ({
  key: `${letter}${num + 1}`,
  id: `${letter}${num + 1}`,
  isDarkSquare: !!(letterIdx % 2 === num % 2),
  coordinate: { x: sevenToZero[num], y: letterIdx }
})));
