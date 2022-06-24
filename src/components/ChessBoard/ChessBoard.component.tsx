import { ChessSquare } from '../../components/ChessSquare';

import { useMatchContext } from '../../contexts/match';

import styles from './ChessBoard.module.scss';

const ChessBoard = () => {
  const { boardState } = useMatchContext();

  console.log('rerender board');

  return (
    <div className={styles.board}>
      {boardState.map(row => row.map(squareProps =>
        <ChessSquare
          key={squareProps.id}
          {...squareProps}
        />
      ))}
    </div>
  );
};

export default ChessBoard;
