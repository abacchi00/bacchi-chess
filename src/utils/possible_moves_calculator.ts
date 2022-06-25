import { ISquareState } from "../models/square";
import { decodePieceId } from "./decode_piece_id";

type TPositiont = { x: number, y: number };
type TGetTargetedSquaresFunction = (x: number, y: number, boardState: ISquareState[][]) => TPositiont[];
type TTraverseBoardFunction = (x: number, y: number, boardState: ISquareState[][], xIncrement: number, yIncrement: number) => TPositiont[];

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

// TODO REFACTOR THIS SHIT
const getPawnTargetedSquares: TGetTargetedSquaresFunction = (x, y, boardState) => {
  let possibleMoves = [];

  const pawn = decodePieceId(boardState[x][y].pieceID);

  if (!pawn) return [];

  if (pawn.team === 'light') {
    const middleTarget = decodePieceId(boardState[x - 1][y].pieceID);
    const middleFrontTarget = isInsideBoard(x - 2, y) ? decodePieceId(boardState[x - 2][y].pieceID) : null;
    const leftTarget = isInsideBoard(x - 1, y - 1) ? decodePieceId(boardState[x - 1][y - 1].pieceID) : null;
    const rightTarget = isInsideBoard(x - 1, y + 1) ? decodePieceId(boardState[x - 1][y + 1].pieceID) : null;

    if (!middleTarget && !middleFrontTarget && x === 6) possibleMoves.push({ x: x - 2, y });    

    if (!middleTarget) possibleMoves.push({ x: x - 1, y });

    if (leftTarget && leftTarget.team !== pawn.team) possibleMoves.push({ x: x - 1, y: y - 1 });
    
    if (rightTarget && rightTarget.team !== pawn.team) possibleMoves.push({ x: x - 1, y: y + 1 });
  } else {
    const middleTarget = decodePieceId(boardState[x + 1][y].pieceID);
    const middleFrontTarget = isInsideBoard(x + 2, y) ? decodePieceId(boardState[x + 2][y].pieceID) : null;
    const leftTarget = isInsideBoard(x + 1, y - 1) ? decodePieceId(boardState[x + 1][y - 1].pieceID) : null;
    const rightTarget = isInsideBoard(x + 1, y + 1) ? decodePieceId(boardState[x + 1][y + 1].pieceID) : null;

    if (!middleTarget && !middleFrontTarget && x === 1) possibleMoves.push({ x: x + 2, y });

    if (!middleTarget) possibleMoves.push({ x: x + 1, y });

    if (leftTarget && leftTarget.team !== pawn.team) possibleMoves.push({ x: x + 1, y: y - 1 });
    
    if (rightTarget && rightTarget.team !== pawn.team) possibleMoves.push({ x: x + 1, y: y + 1 });
  }
  
  return possibleMoves.filter(({ x: sx, y: sy }) => isInsideBoard(sx, sy) && !sameTeam(boardState[sx][sy], boardState[x][y]));
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
