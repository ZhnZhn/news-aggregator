import {
  useRef,
  useState,
  useMemo,
  KEY_ARROW_DOWN,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import useAriaCombobox from './useAriaCombobox';

import ButtonArrow from './ButtonArrow';
import OptionsPane from './OptionsPane';
import { getItemCaption } from './OptionFn';

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
    isShowOptions,
    setIsShowOptions
  ] = useState(false)
  , [
    _optionPaneId,
    _ariaComboboxProps
  ] = useAriaCombobox(isShowOptions)
  , [
    _hShowOptions,
    _hCloseOptions
  ] = useMemo(() => [
      (evt) => {
        stopDefaultFor(evt)
        setIsShowOptions(true)
      },
      () => {
        setIsShowOptions(false)
        focusRefElement(_refBtArrow)
      }
    ], [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , [
    _hSelect,
    _hKeyDown
  ] = useMemo(() => [
    (item, evt) => {
        stopDefaultFor(evt)
        onSelect(item, id)
        _hCloseOptions()
        setItem(item)
    },
    // id, onSelect, _hCloseOptions
    (evt) => {
      if (evt.key === KEY_ARROW_DOWN) {
        _hShowOptions(evt)
      }
    }
    // _hShowOptions
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
      onClick={_hShowOptions}
      onKeyDown={_hKeyDown}
    >
    {/*eslint-enable jsx-a11y/no-static-element-interactions*/}
      <label className={CL_SELECT_LABEL}>
        {caption}
      </label>
      <OptionsPane
         id={_optionPaneId}
         isShow={isShowOptions}
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
           ref={_refBtArrow}
           style={S_BT_ARROW}
        />
        <div className={CL_SELECT_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
