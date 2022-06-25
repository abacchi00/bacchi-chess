import { DndContext } from '@dnd-kit/core';
import { ChessSquare } from '../../components/ChessSquare';

import { useMatchContext } from '../../contexts/match';
import { ISquareState } from '../../models/square';

import styles from './ChessBoard.module.scss';

const ChessBoard = () => {
  const { boardState, clickSquare } = useMatchContext();

  console.log('rerender board');

  return (
    <DndContext
      onDragStart={(event) => clickSquare(event.active.data.current as ISquareState)}
      onDragEnd={(event) => clickSquare(event.over?.data.current as ISquareState)}
    >
      <div className={styles.board}>
        {boardState.map(row => row.map(squareProps =>
          <ChessSquare
            key={squareProps.id}
            {...squareProps}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default ChessBoard;
