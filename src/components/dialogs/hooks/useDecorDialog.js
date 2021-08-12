
import useTheme from '../../hooks/useTheme';

import useBtLoad from './useBtLoad';
import useKeyDown from './useKeyDown';

const useDecorDialog = (
  styleConfig,
  hLoad,
  hClose
) => {
  const TS = useTheme(styleConfig);
  return [
    TS,
    useBtLoad(TS.BT, hLoad),
    useKeyDown(hLoad, hClose)
  ];
};

export default useDecorDialog
