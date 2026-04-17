import { crTooltip } from '../a11yFn';
import useHotKey from '../hotkeys/useHotKey';

const useButton = (
  ariaLabel,
  dataPos,
  hotKey,
  onClick
) => {
  useHotKey(hotKey, onClick)
  return crTooltip(
    ariaLabel,
    dataPos,
    hotKey
  );
}

export default useButton
