import useTheme from '../../hooks/useTheme';
import useKeyDown from './useKeyDown';

const useDecorDialog = (
  styleConfig,
  hLoad,
  hClose
) => {
  const TS = useTheme(styleConfig);
  return [
    TS,
    useKeyDown(hLoad, hClose)
  ];
};

export default useDecorDialog
