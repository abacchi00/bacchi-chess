import { useContext } from 'react';

import { PlayerContext, PlayerContextData } from './context';

const usePlayerContext = (): PlayerContextData => {
  const context = useContext(PlayerContext);

  return context;
};

export default usePlayerContext;
