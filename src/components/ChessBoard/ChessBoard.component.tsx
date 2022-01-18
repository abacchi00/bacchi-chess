import { ChessSquare } from '../ChessSquare';
import styles from './ChessBoard.module.scss';

interface Props {
  showSquaresIds: boolean;
}

const ChessBoard = ({ showSquaresIds }: Props) => {
  return (
    <div className={styles.board}>
      <ChessSquare id="a8" showId={showSquaresIds} />
      <ChessSquare id="b8" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="c8" showId={showSquaresIds}/>
      <ChessSquare id="d8" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="e8" showId={showSquaresIds}/>
      <ChessSquare id="f8" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="g8" showId={showSquaresIds} />
      <ChessSquare id="h8" showId={showSquaresIds} isDarkSquare />

      <ChessSquare id="a7" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="b7" showId={showSquaresIds} />
      <ChessSquare id="c7" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="d7" showId={showSquaresIds} />
      <ChessSquare id="e7" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="f7" showId={showSquaresIds} />
      <ChessSquare id="g7" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="h7" showId={showSquaresIds} />

      <ChessSquare id="a6" showId={showSquaresIds} />
      <ChessSquare id="b6" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="c6" showId={showSquaresIds} />
      <ChessSquare id="d6" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="e6" showId={showSquaresIds} />
      <ChessSquare id="f6" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="g6" showId={showSquaresIds} />
      <ChessSquare id="h6" showId={showSquaresIds} isDarkSquare />

      <ChessSquare id="a5" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="b5" showId={showSquaresIds} />
      <ChessSquare id="c5" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="d5" showId={showSquaresIds} />
      <ChessSquare id="e5" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="f5" showId={showSquaresIds} />
      <ChessSquare id="g5" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="h5" showId={showSquaresIds} />

      <ChessSquare id="a4" showId={showSquaresIds} />
      <ChessSquare id="b4" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="c4" showId={showSquaresIds} />
      <ChessSquare id="d4" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="e4" showId={showSquaresIds} />
      <ChessSquare id="f4" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="g4" showId={showSquaresIds} />
      <ChessSquare id="h4" showId={showSquaresIds} isDarkSquare />

      <ChessSquare id="a3" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="b3" showId={showSquaresIds} />
      <ChessSquare id="c3" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="d3" showId={showSquaresIds} />
      <ChessSquare id="e3" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="f3" showId={showSquaresIds} />
      <ChessSquare id="g3" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="h3" showId={showSquaresIds} />

      <ChessSquare id="a2" showId={showSquaresIds} />
      <ChessSquare id="b2" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="c2" showId={showSquaresIds} />
      <ChessSquare id="d2" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="e2" showId={showSquaresIds} />
      <ChessSquare id="f2" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="g2" showId={showSquaresIds} />
      <ChessSquare id="h2" showId={showSquaresIds} isDarkSquare />

      <ChessSquare id="a1" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="b1" showId={showSquaresIds} />
      <ChessSquare id="c1" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="d1" showId={showSquaresIds} />
      <ChessSquare id="e1" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="f1" showId={showSquaresIds} />
      <ChessSquare id="g1" showId={showSquaresIds} isDarkSquare />
      <ChessSquare id="h1" showId={showSquaresIds} />
    </div>
  );
};

export default ChessBoard;
