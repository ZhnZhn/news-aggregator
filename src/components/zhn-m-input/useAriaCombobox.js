import useId from '../hooks/useId';

const useAriaCombobox = (
  isShow,
  isAutocomplete
) => {
  const _controlsId = useId();
  return [
    _controlsId, {
      role: "combobox",
      "aria-autocomplete": isAutocomplete ? "list" : "none",
      "aria-expanded": isShow,
      "aria-controls": _controlsId
    }
  ];
};

export default useAriaCombobox
