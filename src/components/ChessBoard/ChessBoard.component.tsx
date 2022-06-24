import { ChessSquare } from '../../components/ChessSquare';

import { useMatchContext } from '../../contexts/match';

import styles from './ChessBoard.module.scss';

const ChessBoard = () => {
  const { boardState, clickSquare } = useMatchContext();

  console.log('rerender');

  return (
    <div className={styles.board}>
      {boardState.map(row => row.map(squareProps =>
        <ChessSquare
          key={squareProps.id}
          onClick={() => clickSquare(squareProps)}
          {...squareProps}
        />
      ))}
    </div>
  );
};

export default ChessBoard;
