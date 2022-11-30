import { useCallback } from '../uiApi';
import DateUtil from '../../utils/dt';
import TextField from './TextField';

const DATE_ERR_MSG = "YYYY-MM-DD"
, _onTestDate = DateUtil.isValidDate
, _toUTCSecond = DateUtil.toUTCSecond;

const InputFromToDate = ({
  style,
  initialFrom,
  initialTo,
  onInput
}) => {
  const _onInput = useCallback((v, id) => {
    onInput(''+_toUTCSecond(v), id)
  }, [onInput]);
  return (
   <div>
      <TextField
        id="fromDate"
        caption="From Date"
        hasClear={false}
        style={style}
        initValue={initialFrom}
        errorMsg={DATE_ERR_MSG}
        onTest={_onTestDate}
        onEnter={_onInput}
        onBlur={_onInput}
      />
      <TextField
        id="toDate"
        caption="To Date"
        hasClear={false}
        style={style}
        initValue={initialTo}
        errorMsg={DATE_ERR_MSG}
        onTest={_onTestDate}
        onEnter={_onInput}
        onBlur={_onInput}
      />
   </div>
  );
}

export default InputFromToDate
