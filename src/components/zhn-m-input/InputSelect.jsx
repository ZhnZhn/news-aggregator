import {
  useState,
  useCallback
} from '../uiApi';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';

const CL_SELECT = 'm-select'
, CL_LABEL = `${CL_SELECT}__label`
, CL_DIV = `${CL_SELECT}__div`
, CL_DIV_VALUE = `${CL_SELECT}__div__value`
, CL_DIV_BT = `${CL_SELECT}__div__bt`
, CL_INPUT_LINE = `${CL_SELECT}__line`;

const DF_INIT_ITEM = {
  caption: '',
  value: ''
};

const InputSelect = ({
  initItem,
  caption, options, styleConfig:TS,
  onSelect
}) => {
  const [item, setItem] = useState(initItem || DF_INIT_ITEM)
  , [isShow, setIsShow] = useState(false)
  , _hOpen = useCallback(()=> setIsShow(true), [])
  , _hClose = useCallback(() => setIsShow(false), [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSelect = useCallback((item, event) => {
      event.stopPropagation()
      onSelect(item)
      setIsShow(false)
      setItem(item)
  }, [])
  // onSelect
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      role="presentation"
      className={CL_SELECT}
      style={TS.ROOT}
      onClick={_hOpen}
    >
      <label className={CL_LABEL}>
        {caption}
      </label>
      <OptionsPane
         isShow={isShow}
         item={item}
         options={options}
         clItem={TS.CL_ITEM}
         onSelect={_hSelect}
         onClose={_hClose}
       />
      <div className={CL_DIV}>
        <div className={CL_DIV_VALUE}>
           {item.caption}
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
