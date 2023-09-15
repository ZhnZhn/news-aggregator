import {
  useRef,
  useState,
  useMemo,
  KEY_ARROW_DOWN,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import useBool from '../hooks/useBool';

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
  styleConfig:TS,
  onSelect
}) => {
  const _refBtArrow = useRef()
  , [
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    isShowOptions,
    showOptions,
    hideOptions
  ] = useBool()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCloseOptions = useMemo(() => () => {
    hideOptions()
    focusRefElement(_refBtArrow)
  }, [])
  // hideOptions, _refBtArrow
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
    // id, onSelect, _closeOptions
    (evt) => {
      if (evt.key === KEY_ARROW_DOWN) {
        stopDefaultFor(evt)
        showOptions()
      }
    }
    // showOptions
  ]
  , [])
  // hideOptions, _refBtArrow
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
      onClick={showOptions}
      onKeyDown={_hKeyDown}
    >
      <label className={CL_SELECT_LABEL}>
        {caption}
      </label>
      <OptionsPane
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
