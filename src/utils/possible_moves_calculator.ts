import { ISquareState } from "../models/square";
import { DecodedPieceProps, decodePieceId } from "./decode_piece_id";

type TPosition = { x: number, y: number };
type TGetTargetedSquaresFunction = (x: number, y: number, boardState: ISquareState[][]) => TPosition[];
type TTraverseBoardFunction = (x: number, y: number, boardState: ISquareState[][], xIncrement: number, yIncrement: number) => TPosition[];

export const getTargetedSquares = (origin: ISquareState, boardState: ISquareState[][]): ISquareState[][] => {
  const piece = decodePieceId(origin.pieceID);
  
  if (!piece) return boardState;

  const getTargetedSquares = {
    "bishop": getBishopTargetedSquares,
    "king": getKingTargetedSquares,
    "knight": getKnightTargetedSquares,
    "pawn": getPawnTargetedSquares,
    "queen": getQueenTargetedSquares,
    "rook": getRookTargetedSquares,
  }

  const targetedCoordinates = getTargetedSquares[piece.type](origin.x, origin.y, boardState);

  return boardState.map((row, rowIdx) => row.map((square, colIdx) => {
    if (targetedCoordinates.find(({ x, y }) => x === rowIdx && y === colIdx)) {
      return { ...square, threatID: origin.pieceID }
    }

    return square;
  }))
}

const sameTeam = (square1: ISquareState, square2: ISquareState) => {
  const piece1 = decodePieceId(square1.pieceID);
  const piece2 = decodePieceId(square2.pieceID);

  if ((!piece1 && piece2) || (piece1 && !piece2) || piece1?.team !== piece2?.team) return false;

  return true;
}

const isInsideBoard = (x: number, y: number) => {
  return x <= 7 && x >= 0 && y <= 7 && y >= 0;
}

const getKnightTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  return [
    { x: x + 2, y: y + 1 },
    { x: x + 1, y: y + 2 },
    { x: x - 2, y: y + 1 },
    { x: x - 1, y: y + 2 },
    { x: x - 2, y: y - 1 },
    { x: x - 1, y: y - 2 },
    { x: x + 2, y: y - 1 },
    { x: x + 1, y: y - 2 },
  ].filter(({ x: sx, y: sy }) => isInsideBoard(sx, sy) && !sameTeam(boardState[sx][sy], boardState[x][y]));
}

const getKingTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  return [
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y + 1 },
    { x: x - 1, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x + 1, y },
    { x: x - 1, y },
    { x, y: y - 1 },
    { x, y: y + 1 },
  ].filter(({ x: sx, y: sy }) => isInsideBoard(sx, sy) && !sameTeam(boardState[sx][sy], boardState[x][y]));
}

const getPiecePropsFromCoordinate = (x: number, y: number, boardState: ISquareState[][]): DecodedPieceProps => {
  return isInsideBoard(x, y) ? decodePieceId(boardState[x][y].pieceID) : null;
}

const getPawnTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  const pawn = decodePieceId(boardState[x][y].pieceID);

  if (!pawn) return [];

  const factor = pawn.team === 'light' ? -1 : 1;
  const pawnInitialX = pawn.team === 'light' ? 6 : 1;

  const middleTarget = getPiecePropsFromCoordinate(x + factor, y, boardState);
  const middleFrontTarget = getPiecePropsFromCoordinate(x + factor * 2, y, boardState);
  const leftTarget = getPiecePropsFromCoordinate(x + factor, y - 1, boardState);
  const rightTarget = getPiecePropsFromCoordinate(x + factor, y + 1, boardState);

  const middleFrontTargetPosition = (x === pawnInitialX && !middleTarget && !middleFrontTarget) ? [{ x: x + 2 * factor, y }] : [];    
  const middleTargetPosition = !middleTarget ? [{ x: x + factor, y }] : [];
  const leftTargetPosition = (leftTarget && leftTarget.team !== pawn.team) ? [{ x: x + factor, y: y - 1 }] : [];
  const rightTargetPosition = (rightTarget && rightTarget.team !== pawn.team) ? [{ x: x + factor, y: y + 1 }] : [];

  return [
    ...middleFrontTargetPosition,
    ...middleTargetPosition,
    ...leftTargetPosition,
    ...rightTargetPosition,
  ];
}

const getBishopTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  return [
    ...traverseBoard(x, y, boardState, -1, -1),
    ...traverseBoard(x, y, boardState, -1, +1),
    ...traverseBoard(x, y, boardState, +1, -1),
    ...traverseBoard(x, y, boardState, +1, +1),
  ];
}

const getRookTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  return [
    ...traverseBoard(x, y, boardState, 0, -1),
    ...traverseBoard(x, y, boardState, 0, +1),
    ...traverseBoard(x, y, boardState, +1, 0),
    ...traverseBoard(x, y, boardState, -1, 0),
  ];
}

const getQueenTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  return [
    ...traverseBoard(x, y, boardState, 0, -1),
    ...traverseBoard(x, y, boardState, 0, +1),
    ...traverseBoard(x, y, boardState, +1, 0),
    ...traverseBoard(x, y, boardState, -1, 0),
    ...traverseBoard(x, y, boardState, -1, -1),
    ...traverseBoard(x, y, boardState, -1, +1),
    ...traverseBoard(x, y, boardState, +1, -1),
    ...traverseBoard(x, y, boardState, +1, +1),
  ];
}

const traverseBoard: TTraverseBoardFunction = (x, y, boardState, xIncrement, yIncrement) => {
  let positions = [];

  let sx = x + xIncrement;
  let sy = y + yIncrement;

  while (isInsideBoard(sx, sy)) {
    const isSameTeam = sameTeam(boardState[sx][sy], boardState[x][y]);

    if (isSameTeam) break;

    positions.push({ x: sx, y: sy });

    if (!!boardState[sx][sy].pieceID && !isSameTeam) break;
  
    sx += xIncrement;
    sy += yIncrement;
  }

  return positions;
}
