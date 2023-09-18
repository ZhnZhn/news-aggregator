import {
  useRef,
  useState,
  useMemo,
  KEY_ARROW_DOWN,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import useId from '../hooks/useId';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';
import {
  getItemCaption
} from './OptionFn';

import {
  CL_SELECT,
  CL_SELECT_LABEL,
  CL_SELECT_DIV,
  CL_SELECT_DIV_VALUE,
  CL_SELECT_DIV_BT,
  CL_SELECT_INPUT_LINE,
  CL_SELECT_OPTIONS,
  CL_SELECT_ITEM
} from './Input.Style';

const DF_INIT_ITEM = ['', ''];

const InputSelect = ({
  id,
  initItem,
  caption,
  options,
  styleConfig,
  onSelect
}) => {
  const _optionPaneId = useId()
  , _refBtArrow = useRef()
  , [
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    isShowOptions,
    setIsShowOptions
  ] = useState(false)
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

  return (
    <div
      role="combobox"
      aria-controls={_optionPaneId}
      aria-expanded={isShowOptions}
      tabIndex="-1"
      className={CL_SELECT}
      style={styleConfig.ROOT}
      onClick={_hShowOptions}
      onKeyDown={_hKeyDown}
    >
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
        <button
          ref={_refBtArrow}
          type="button"
          className={CL_SELECT_DIV_BT}
        >
           <ArrowCell />
        </button>
        <div className={CL_SELECT_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
