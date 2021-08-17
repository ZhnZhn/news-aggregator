import { useState, useCallback } from 'react';

import ArrowCell from './ArrowCell';
import OptionsPane from './OptionsPane';

const CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-select__div',
  DIV_VALUE: 'm-select__div__value',
  DIV_BT: 'm-select__div__bt',
  INPUT_LINE: 'm-select__line'
};

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
      className={CL.SELECT}
      style={TS.ROOT}
      onClick={_hOpen}
    >
      <label className={CL.LABEL}>
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
      <div className={CL.DIV}>
        <div className={CL.DIV_VALUE}>
           {item.caption}
        </div>
        <button className={CL.DIV_BT}>
           <ArrowCell />
        </button>
        <div className={CL.INPUT_LINE} />
      </div>
    </div>
  );
}

export default InputSelect
