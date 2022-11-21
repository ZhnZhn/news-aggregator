import {
  useState,
  useCallback
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
  const [
    item,
    setItem
  ] = useState(initItem || DF_INIT_ITEM)
  , [
    isShow,
    showComp,
    hideComp
  ] = useBool()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSelect = useCallback((item, event) => {
      event.stopPropagation()
      onSelect(item, id)
      hideComp()
      setItem(item)
  }, []);
  // id, onSelect, hideComp
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
      onClick={showComp}
    >
      <label className={CL_LABEL}>
        {caption}
      </label>
      <OptionsPane
         isShow={isShow}
         className={CL_SELECT_OPTIONS}
         item={item}
         options={options}
         clItem={CL_SELECT_ITEM}
         onSelect={_hSelect}
         onClose={hideComp}
       />
      <div className={CL_DIV}>
        <div className={CL_DIV_VALUE}>
           {getItemCaption(item)}
        </div>
        <button className={CL_DIV_BT}>
           <ArrowCell />
        </button>
        <div className={CL_INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
