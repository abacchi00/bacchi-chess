import { PiecePosition } from "../models/chess_piece";

export const getDiagonalPositionsFor = (piecePosition: PiecePosition) => {
  return [0,1,2,3,4,5,6,7].flatMap(num => {
    if (piecePosition?.y === num) return [];

    const firstX = piecePosition.x + Math.abs(piecePosition.y - num);
    const secondX = piecePosition.x - Math.abs(piecePosition.y - num);

    if (firstX <= 7 && firstX >= 0 && secondX <= 7 && secondX >= 0) return [{ x: firstX, y: num }, { x: secondX, y: num }];
    else if (firstX <= 7 && firstX >= 0) return [{ x: firstX, y: num }];
    else if (secondX <= 7 && secondX >= 0) return [{ x: secondX, y: num }];
    else return [];
  })
}

export const getPerpendicularPositionsFor = (piecePosition: PiecePosition) => {
  return [0,1,2,3,4,5,6,7].flatMap(num => [{ x: piecePosition.x, y: num }, { x: num, y: piecePosition.y }])
}

export const filterPositions = (positions: PiecePosition[], piecePosition: PiecePosition) => { // todo take out position of other pieces in the board, now it just takes off the own piece position from the array
  return positions.filter(({ x, y }) => x !== piecePosition.x || y !== piecePosition.y);
}
