import {
  useRef,
  useState,
  useCallback,
  focusRefElement
} from '../uiApi';

import useBool from '../hooks/useBool';

import {
  CL_SELECT_ITEM
} from '../styles/CL';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';
import {
  getItemCaption
} from './OptionFn';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_DIV = `${CL_SELECT}__div`
, CL_DIV_VALUE = `${CL_SELECT}__div__value`
, CL_DIV_BT = `${CL_SELECT}__div__bt`
, CL_INPUT_LINE = `${CL_SELECT}__line`
, CL_SELECT_OPTIONS = `${CL_SELECT}__options with-scroll`;

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
  , _hCloseOptions = useCallback(() => {
    hideOptions()
    focusRefElement(_refBtArrow)
  }, [])
  // hideOptions, _refBtArrow
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSelect = useCallback((item, evt) => {
      evt.stopPropagation()
      onSelect(item, id)
      _hCloseOptions()
      setItem(item)
  }, []);
  // id, onSelect, _closeOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
      onClick={showOptions}
    >
      <label className={CL_LABEL}>
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
      <div className={CL_DIV}>
        <div className={CL_DIV_VALUE}>
           {getItemCaption(item)}
        </div>
        <button
          ref={_refBtArrow}
          type="button"
          className={CL_DIV_BT}
        >
           <ArrowCell />
        </button>
        <div className={CL_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
