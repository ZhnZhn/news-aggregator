import TextField from '../zhn-m-input/TextField';
import DateUtil from '../../utils/dt';

const DATE_ERR_MSG = "YYYY-MM-DD"
, _onTestDate = DateUtil.isValidDate;

const InputFromToDate = ({
  refFromDate,
  refToDate,
  TS,
  initialFrom,
  initialTo
}) => (
  <div>
     <TextField
       ref={refFromDate}
       caption="From Date"
       hasClear={false}
       style={TS.INPUT_DATE}
       initValue={initialFrom}
       errorMsg={DATE_ERR_MSG}
       onTest={_onTestDate}
     />
     <TextField
       ref={refToDate}
       caption="To Date"
       hasClear={false}
       style={TS.INPUT_DATE}
       initValue={initialTo}
       errorMsg={DATE_ERR_MSG}
       onTest={_onTestDate}
     />
 </div>
);

export default InputFromToDate
