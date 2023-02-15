import useTooltip from '../hooks/useTooltip';
import useHotKey from '../hotkeys/useHotKey';

const useButton = (
  ariaLabel,
  dataPos,
  hotKey,
  onClick
) => {
  useHotKey(hotKey, onClick)
  return useTooltip(
    ariaLabel,
    dataPos,
    hotKey
  );
}

export default useButton
