import {
  crLazyValue,

  useRef,
  useMemo,

  KEY_ARROW_DOWN,
  KEY_DELETE,

  getRefValue,
  setRefValue,
  setRefInputValue,
  focusRefElement,
  stopDefaultFor
} from '../uiApi';

import { crStyle2 } from '../crStyle';

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
}
, S_BT_ARROW_FILL = {
  fill: "#80c040"
};

const FILTER_TIME_OUT_MLS = 350
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
  , _refFilterId = useRef()
  , _refItem = useRef()
  , [
    state,
    dispatch
  ] = useOptionsPane(
    options,
    initItem
  )
  , [
    isShowOptions,
    isFocusItem,
    items,
    item
  ] = state
  , [
    _optionsPaneId,
    _ariaComboboxProps
  ] = useAriaCombobox(
    isShowOptions,
    true
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , [
    _clearItem,
    _setItem,
    _hCloseOptions,
    _hKeyDownTextField,
    _hClickBtArrow
  ] = useMemo(() => [
    //_clearItem
    () => {
      onSelect(initItem, id)
      dispatch([ACTION_CLOSE_OPTIONS, options, ''])
      focusRefElement(_refTf)
    },
    // onSelect, initItem, id, dispatch

    //_setItem
    (item) => {
      const _isEmptyOptions = item === EMPTY_OPTIONS[0]
      , _item = _isEmptyOptions
        ? initItem
        : item;
      onSelect(_item, id)
      dispatch([
        ACTION_CLOSE_OPTIONS,
        _isEmptyOptions ? options : void 0,
        _item
      ])
      setRefInputValue(_refTf, _item)
      if (_item) {
        focusRefElement(_refBtArrow)
      }
    },
    // id, initItem, onSelect, dispatch

    //_hCloseOptions
    () => {
      dispatch([ACTION_CLOSE_OPTIONS])
      focusRefElement(_refBtArrow)
    },
    // dispatch

    //_hKeyDownTextField
    (evt) => {
      const key = evt.key;
      if (key === KEY_ARROW_DOWN) {
        dispatch([ACTION_SHOW_OPTIONS_WITH_FOCUS])
      }
    },
    // dispatch

    //_hClickBtArrow
    () => {
      dispatch([ACTION_SHOW_OPTIONS_WITH_FOCUS])
    }
    // dispatch
  ], [])
  /*eslint-enable react-hooks/exhaustive-deps */

  , _hKeyDownBtArrow = (evt) => {
    if (isShowOptions) {
      const _opInst = getRefValue(_refOp);
      if (_opInst) {
        _opInst.hKeyDown(evt)
      }
    } else {
      if (evt.key === KEY_ARROW_DOWN) {
        dispatch([ACTION_SHOW_OPTIONS_WITH_FOCUS])
      } else if (evt.key === KEY_DELETE) {
        _clearItem()
        setRefInputValue(_refTf, '')
      }
    }
  }

  , _getSearchOptions = useMemo(() => crLazyValue(
      () => options.map(item => {
        item._t = item[0].toLowerCase()
        return item;
      })),
      [options]
  )

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hInputChange = useMemo(() => (token, id) => {
       const _token = (token || '')
         .trim()
         .toLowerCase();
       if (_token) {
         clearTimeout(getRefValue(_refFilterId))
         setRefValue(_refFilterId, setTimeout(() => {
            const _nextItems = _getSearchOptions().filter(
              item => item._t.indexOf(_token) !== -1
            )
            , _items = _nextItems.length
               ? _nextItems
               : EMPTY_OPTIONS
            setRefValue(_refItem, _items[0])
            dispatch([
              ACTION_SHOW_OPTIONS,
              _items
            ])
          }, FILTER_TIME_OUT_MLS)
        )
       } else {
         _clearItem()
       }
  }, [_getSearchOptions, _clearItem])
  //dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , [
    _hSelectOption,
    _hEnterTextField
  ] = useMemo(() => [
    (item, evt) => {
      stopDefaultFor(evt)
      _setItem(item)
    },
    (item, id, evt) => {
      stopDefaultFor(evt)
      _setItem(getRefValue(_refItem))
    }
  ], [])
  // _setItem
  /*eslint-enable react-hooks/exhaustive-deps */
  , _hFocusTextField = HAS_TOUCH_EVENTS ? (evt) => {
    const _value = evt.target.value;
    if (_value && _value === getItemCaption(item)) {
      dispatch([ACTION_SHOW_OPTIONS_WITH_FOCUS])
    }
  } : void 0;

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
         onSelect={_hSelectOption}
         onClose={_hCloseOptions}
       />
       <TextField
         {..._ariaComboboxProps}
         ref={_refTf}
         style={tfStyle}
         initValue={getItemCaption(item)}
         onInputChange={_hInputChange}
         onEnter={_hEnterTextField}
         onKeyDown={_hKeyDownTextField}
         onFocus={_hFocusTextField}
       >
         {_isBtArrow(item, items, options) &&
           <ButtonArrow
              ref={_refBtArrow}
              style={crStyle2(
                S_BT_ARROW,
                isShowOptions && S_BT_ARROW_FILL
              )}
              onKeyDown={_hKeyDownBtArrow}
              onClick={_hClickBtArrow}
           />
       }
       </TextField>
    </div>
  );
}

export default InputSuggest
