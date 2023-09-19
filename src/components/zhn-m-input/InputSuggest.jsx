import {
  crLazyValue,

  useRef,
  useState,
  useMemo,
  useCallback,

  KEY_ARROW_DOWN,
  KEY_DELETE,

  getRefValue,
  setRefInputValue,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import { HAS_TOUCH_EVENTS } from '../has';

import useAriaCombobox from './useAriaCombobox';


import TextField from './TextField';
import ButtonArrow from './ButtonArrow';
import OptionsPane from './OptionsPane';
import { getItemCaption } from './OptionFn';

import {
  EMPTY_OPTIONS,
  ACTION_SHOW_OPTIONS,
  ACTION_SHOW_OPTIONS_WITH_FOCUS,
  ACTION_CLOSE_OPTIONS,
  useOptionsPane
} from './useOptionsPane';

import {
  CL_SELECT,
  CL_SELECT_LABEL,  
  CL_SELECT_OPTIONS,
  CL_SELECT_ITEM
} from './Input.Style';

const S_OPTIONS_PANE = {
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
  styleConfig,
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
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    state,
    dispatch
  ] = useOptionsPane()
  , [
    isShowOptions,
    isFocusItem
  ] = state
  , [
    _optionsPaneId,
    _ariaComboboxProps
  ] = useAriaCombobox(
    isShowOptions,
    true
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _clearItem = useCallback(() => {
    onSelect(initItem, id)
    setItem('')
    setItems(options)
    dispatch(ACTION_CLOSE_OPTIONS)
  }, [])
  // onSelect, initItem, id, dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hKeyDownBtArrow = (evt) => {
    if (isShowOptions) {
      const _opInst = getRefValue(_refOp);
      if (_opInst) {
        _opInst.hKeyDown(evt)
      }
    } else {
      if (evt.key === KEY_ARROW_DOWN) {
        dispatch(ACTION_SHOW_OPTIONS_WITH_FOCUS)
      } else if (evt.key === KEY_DELETE) {
        _clearItem()
        setRefInputValue(_refTf, '')
        focusRefElement(_refTf)
      }
    }
  }

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hCloseOptions = useMemo(() => () => {
    dispatch(ACTION_CLOSE_OPTIONS)
    focusRefElement(_refBtArrow)
  }, [])
  // dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _setItem = useCallback(item => {
    const _isEmptyOptions = item === EMPTY_OPTIONS[0]
    , _item = _isEmptyOptions
      ? initItem
      : item;
    onSelect(_item, id)
    setItem(_item)
    dispatch(ACTION_CLOSE_OPTIONS)
    if (_isEmptyOptions) {
      setItems(options)
    }
    setRefInputValue(_refTf, _item)
    if (_item) {
      focusRefElement(_refBtArrow)
    }
  }, [])
  // id, onSelect, dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  , _lazySearchOptions = useMemo(() => crLazyValue(
      () => options.map(item => {
        item._t = item[0].toLowerCase()
        return item;
      })),
      [options]
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hInputChange = useCallback((token, id) => {
       const _token = (token || '')
         .trim()
         .toLowerCase();
       if (_token) {
         const _nextItems = _lazySearchOptions.value.filter(
           item => item._t.indexOf(_token) !== -1
         )
         setItems(_nextItems.length
           ? _nextItems
           : EMPTY_OPTIONS
         )
         dispatch(ACTION_SHOW_OPTIONS)
       } else {
         _clearItem()
       }
  }, [_lazySearchOptions, _clearItem])
  //options, dispatch, _clearItem
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hKeyDown = (evt) => {
      const key = evt.key;
      if (key === KEY_ARROW_DOWN) {
        dispatch(ACTION_SHOW_OPTIONS_WITH_FOCUS)
      }
  }
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
    dispatch(ACTION_SHOW_OPTIONS_WITH_FOCUS)
  };

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={styleConfig.ROOT}
    >
      <label className={CL_SELECT_LABEL}>
        {caption}
      </label>
      <OptionsPane
         id={_optionsPaneId}
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
         onInputChange={_hInputChange}
         onEnter={_hEnter}
         onKeyDown={_hKeyDown}
         {..._ariaComboboxProps}
       >
         {_isBtArrow(item, items, options) &&
           <ButtonArrow
              ref={_refBtArrow}
              style={S_BT_ARROW}
              onKeyDown={_hKeyDownBtArrow}
              onClick={_hClickBtArrow}
           />
       }
       </TextField>
    </div>
  );
}

export default InputSuggest
