export type PieceID = 'bl1' | 'bl2' | 'bd1' | 'bd2'
  | 'rl1' | 'rl2' | 'rd1' | 'rd2'
  | 'ql' | 'qd'
  | 'kl' | 'kd'
  | 'nl1' | 'nl2' | 'nd1' | 'nd2'
  | 'pl1' | 'pl2' | 'pl3' | 'pl4' | 'pl5' | 'pl6' | 'pl7' | 'pl8'
  | 'pd1' | 'pd2' | 'pd3' | 'pd4' | 'pd5' | 'pd6' | 'pd7' | 'pd8';

export type PieceType = 'rook' | 'pawn' | 'queen' | 'king' | 'knight' | 'bishop';
export const pieceTypes = ['rook', 'pawn', 'queen', 'king', 'knight', 'bishop'];
export const pieceTypesByLetter: { [key: string]: PieceType } = {
  r: 'rook',
  p: 'pawn',
  q: 'queen',
  k: 'king',
  n: 'knight',
  b: 'bishop',
}

export type PieceTeam = 'light' | 'dark';
export const pieceTeams = ['light', 'dark'];
export const pieceTeamsByLetter: { [key: string]: PieceTeam } = {
  l: 'light',
  d: 'dark',
}
