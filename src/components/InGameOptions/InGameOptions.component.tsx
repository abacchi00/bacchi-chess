import { FiClock, FiEye } from 'react-icons/fi';
import styles from './InGameOptions.module.scss';

interface Props {
  onChangeClock: () => void;
  enableSquaresIds: () => void;
}

const InGameOptions = ({ onChangeClock, enableSquaresIds }: Props) => {
  return (
    <div className={styles.options_container}>
      <div className={styles.icon_button} onClick={() => enableSquaresIds()}><FiEye size={32}/></div>

      <div className={styles.icon_button} onClick={() => onChangeClock()}><FiClock size={32}/></div>
    </div>
  );
};

export default InGameOptions;
