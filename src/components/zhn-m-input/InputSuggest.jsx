import {
  useRef,
  useState,
  useMemo,
  useCallback,

  KEY_TAB,
  KEY_ARROW_DOWN,
  KEY_DELETE,

  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import { HAS_TOUCH_EVENTS } from '../has';

import useBool from '../hooks/useBool';

import {
  CL_SELECT_ITEM
} from '../styles/CL';

import TextField from './TextField';
import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';
import { getItemCaption } from './OptionFn';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_DIV_BT = `${CL_SELECT}__div__bt`
, CL_SELECT_OPTIONS = `${CL_SELECT}__options with-scroll`
, S_OPTIONS_PANE = {
  top: 64
}
, S_BT_ARROW = {
  top: 12
};

const DF_INIT_ITEM = ['', '']
, NOT_HAS_TOUCH_EVENTS = !HAS_TOUCH_EVENTS
, _isBtArrow = (
  item,
  items,
  options
) => NOT_HAS_TOUCH_EVENTS
  || HAS_TOUCH_EVENTS && (!item && items.length === options.length);

const InputSuggest = ({
  id,
  tfStyle,
  initItem,
  caption,
  options,
  styleConfig:TS,
  onSelect
}) => {
  const _refTf = useRef()
  , _refBtArrow = useRef()
  , _refOp = useRef()
  , [
    items,
    setItems
  ] = useState(options)
  , [
    isFocusItem,
    setIsFocusItem
  ] = useState(false)
  , [
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    isShowOptions,
    showOptions,
    hideOptions
  ] = useBool()
  , _hHideOptions = (evt) => {
    if (isShowOptions) {
      _refOp.current.hKeyDown(evt)
    } else {
      if (evt.key === KEY_ARROW_DOWN) {
        setIsFocusItem(true)
        showOptions()
      } else if (evt.key === KEY_DELETE) {
        _setItem('')
        setItems(options)
        hideOptions()
        focusRefElement(_refTf)
      }
    }
  }

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCloseOptions = useMemo(() => () => {
    hideOptions()
    focusRefElement(_refBtArrow)
  }, [])
  // hideOptions, _refBtArrow
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _setItem = useCallback(item => {
    onSelect(item, id)
    hideOptions()
    setItem(item)
    _refTf.current.setValue(item)
    if (item) {
      focusRefElement(_refBtArrow)
    }
  }, [])
  // id, onSelect, _hCloseOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback((token, id, evt) => {
    if (evt && evt.key !== KEY_TAB) {
       const _token = (token || '')
         .trim()
         .toLowerCase();
       if (_token) {
         setItems(prevItems => options.filter(
           item => item[0].toLowerCase().indexOf(_token) !== -1
         ))
         showOptions()
         setIsFocusItem(false)
       } else {
         _setItem('')
         setItems(options)
         hideOptions()
       }
    }
  }, [options, showOptions, hideOptions])
  //options, showOptions, hideOptions, _setItem
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hEnter = (item, id, evt) => {
      stopDefaultFor(evt)
      setItems(prevItems => {
      if (prevItems.length !== 0) {
        _setItem(prevItems[0])
      }
      return prevItems;
    })
  }
  , _hSelect = (item, evt) => {
    stopDefaultFor(evt)
    _setItem(item)
  }
  , _hClickBtArrow = () => {
    showOptions()
    setIsFocusItem(true)
  }

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
    >
      <label className={CL_LABEL}>
        {caption}
      </label>
      <OptionsPane
         refOp={_refOp}
         isShow={isShowOptions}
         isFocusItem={isFocusItem}
         className={CL_SELECT_OPTIONS}
         style={S_OPTIONS_PANE}
         item={item}
         options={items}
         clItem={CL_SELECT_ITEM}
         onSelect={_hSelect}
         onClose={_hCloseOptions}
       />
       <TextField
         ref={_refTf}
         style={tfStyle}
         initValue={getItemCaption(item)}
         onKeyDown={_hKeyDown}
         onEnter={_hEnter}
       >
         {_isBtArrow(item, items, options) && <button
           ref={_refBtArrow}
           type="button"
           className={CL_DIV_BT}
           style={S_BT_ARROW}
           onKeyDown={_hHideOptions}
           onClick={_hClickBtArrow}
         >
            <ArrowCell />
         </button>
       }
       </TextField>
    </div>
  );
}

export default InputSuggest
