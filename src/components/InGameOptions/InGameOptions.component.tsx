import clsx from 'clsx';
import { useState } from 'react';
import { FiClock, FiEye, FiUsers } from 'react-icons/fi';

import styles from './InGameOptions.module.scss';

interface Props {
  onChangeClock: () => void;
  enableSquaresIds: () => void;
  changeTurn: () => void;
}

const InGameOptions = ({ onChangeClock, enableSquaresIds, changeTurn }: Props) => {
  const [showSquaresIds, setShowSquaresIds] = useState(true);
  const [runClock, setRunClock] = useState(false);

  const handleShowSquaresIds = () => {
    setShowSquaresIds(prevState => !prevState);
    
    enableSquaresIds();
  };
  
  const handleClock = () => {
    setRunClock(prevState => !prevState);
    
    onChangeClock();
  };

  return (
    <div className={styles.options_container}>
      <div className={clsx(styles.icon_button, { [styles.pressed]: showSquaresIds })} onClick={handleShowSquaresIds}>
        <FiEye size={32} />
      </div>

      <div className={clsx(styles.icon_button, { [styles.pressed]: runClock })} onClick={handleClock}>
        <FiClock size={32} />
      </div>

      <div className={clsx(styles.icon_button, { [styles.spring]: true })} onClick={changeTurn}>
        <FiUsers size={32} />
      </div>
    </div>
  );
};

export default InGameOptions;
