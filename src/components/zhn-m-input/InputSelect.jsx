import {
  useRef,
  useState,
  useMemo,
  KEY_ARROW_DOWN,
  KEY_ARROW_UP,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import useAriaCombobox from './useAriaCombobox';

import ButtonArrow from './ButtonArrow';
import OptionsPane from './OptionsPane';
import {
  FOCUS_NEXT_OPTION,
  FOCUS_PREV_OPTION,
  getItemCaption
} from './OptionFn';

import {
  CL_SELECT,
  CL_SELECT_LABEL,
  CL_SELECT_DIV,
  CL_SELECT_DIV_VALUE,
  CL_SELECT_INPUT_LINE,
  CL_SELECT_OPTIONS,
  CL_SELECT_ITEM,
  S_BT_ARROW_RIGHT
} from './Input.Style';

const S_BT_ARROW = {
  ...S_BT_ARROW_RIGHT,
  top: 'calc(17px - 1rem)'
}
, DF_INIT_ITEM = ['', ''];

const InputSelect = ({
  id,
  style,
  initItem,
  caption,
  options,
  onSelect
}) => {
  const _refBtArrow = useRef()
  , [
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    isShowTuple,
    setIsShowTuple
  ] = useState([!1])
  , [
    showOptions,
    hideOptions
  ] = useMemo(() => [
    (focusOption) => setIsShowTuple([!0, focusOption]),
    () => setIsShowTuple([!1])
  ], [])
  , [
    isShowOptions,
    focusOption
  ] = isShowTuple
  , [
    _optionPaneId,
    _ariaComboboxProps
  ] = useAriaCombobox(isShowOptions)
  /*eslint-disable react-hooks/exhaustive-deps */
  , [
    _hCloseOptions,
    _hSelect,
    _hKeyDown
  ] = useMemo(() => [
    () => {
      hideOptions()
      focusRefElement(_refBtArrow)
    },
    // hideOptions
    (item, evt) => {
        stopDefaultFor(evt)
        onSelect(item, id)
        _hCloseOptions()
        setItem(item)
    },
    // id, onSelect, _hCloseOptions
    (evt) => {
      if (evt.key === KEY_ARROW_DOWN) {
        stopDefaultFor(evt)
        showOptions(FOCUS_NEXT_OPTION)
      } else if (evt.key === KEY_ARROW_UP) {
        stopDefaultFor(evt)
        showOptions(FOCUS_PREV_OPTION)
      }
    }
    // showOptions
  ]
  , [])
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
      {..._ariaComboboxProps}
      tabIndex="-1"
      className={CL_SELECT}
      style={style}      
      onClick={showOptions}
      onKeyDown={_hKeyDown}
    >
    {/*eslint-enable jsx-a11y/no-static-element-interactions*/}
      <label className={CL_SELECT_LABEL}>
        {caption}
      </label>
      <OptionsPane
         id={_optionPaneId}
         isShow={isShowOptions}
         focusOption={focusOption}
         className={CL_SELECT_OPTIONS}
         item={item}
         options={options}
         clItem={CL_SELECT_ITEM}
         onSelect={_hSelect}
         onClose={_hCloseOptions}
       />
      <div className={CL_SELECT_DIV}>
        <div className={CL_SELECT_DIV_VALUE}>
           {getItemCaption(item)}
        </div>
        <ButtonArrow
           refEl={_refBtArrow}
           style={S_BT_ARROW}
        />
        <div className={CL_SELECT_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
