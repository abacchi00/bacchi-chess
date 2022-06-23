import { useContext } from 'react';

import { MatchContext, MatchContextData } from './context';

const useMatchContext = (): MatchContextData => {
  const context = useContext(MatchContext);

  return context;
};

export default useMatchContext;
